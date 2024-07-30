from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Person, Castle
from .tasks import energy_task
import os
import json
import logging

logger = logging.getLogger(__name__)

file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


@receiver(post_save, sender=Person)
def my_changed_enegry(sender, instance, created, **kwargs):
    update_fields = kwargs.get('update_fields')
    if update_fields and 'now_energy' in update_fields:
        task_id = f'energy_task_{instance.id}'
        if not cache.get(task_id):
            cache.set(task_id, 'in_progress', timeout=60000 * 5)
            energy_task.apply_async((instance.id,), countdown=1)


@receiver(post_save, sender=Castle)
def my_changed_hp_castle(sender, instance, created, **kwargs):
    if instance.now_hp >= instance.start_hp:
        try:
            next_lvl_castle = data["Castle"][f"{instance.lvl + 1}"]["lvl"]
            next_lvl_person = data["Person"][f"{instance.person.lvl + 1}"]["lvl"]
            instance.lvl = next_lvl_castle
            instance.person.lvl = next_lvl_person
        except KeyError:
            logger.error(
                f"Ошибка:Вы достигли макимального уровня прокачки !"
            )
            return
        instance.person.start_energy = data["Person"][f"{instance.person.lvl}"]["start_energy"]
        instance.now_hp = abs(instance.now_hp - instance.start_hp)
        instance.start_hp = data["Castle"][f"{instance.lvl}"]["start_hp"]
        instance.person.save()
        instance.save()
