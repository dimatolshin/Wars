from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Person, Castle
from .tasks import energy_task


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
        instance.lvl += 1
        instance.person.lvl = instance.lvl
        instance.person.start_energy += 500
        instance.person.now_energy += 500
        instance.now_hp = abs(instance.now_hp - instance.start_hp)
        instance.start_hp = int(instance.start_hp * 1.2)
        instance.person.save()
        instance.save()
