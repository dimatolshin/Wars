from django.core.cache import cache
from django.db import transaction
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import *
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
            instance.person.box_bronze = False
            instance.person.box_silver = False
            instance.person.box_gold = False
        except KeyError:
            logger.error(
                f"Ошибка:Вы достигли макимального уровня прокачки !"
            )
            return
        instance.person.castles_destroyed += 1
        instance.person.start_energy = data["Person"][f"{instance.person.lvl}"]["start_energy"]
        instance.now_hp = abs(instance.now_hp - instance.start_hp)
        instance.start_hp = data["Castle"][f"{instance.lvl}"]["start_hp"]
        instance.person.save()
        instance.save()


@receiver(post_save, sender=Visit)
def add_bonus_in_list(sender, instance, created, **kwargs):
    bonus = next((int(i) for i in data['Daly_Bonus'] if int(i) > 7 and int(i) == instance.streak), None)
    if bonus is not None:
        instance.numbers_list.append(bonus)
    if instance.streak > int(max(data['Daly_Bonus'])):
        instance.streak = 1
        instance.numbers_list = [int(i) for i in data['Daly_Bonus'] if int(i) > 7]
    if instance.week_streak > 7:
        instance.week_streak = 1

    Visit.objects.filter(pk=instance.pk).update(
        numbers_list=instance.numbers_list,
        streak=instance.streak,
        week_streak=instance.week_streak
    )


# Глобальный флаг для предотвращения рекурсии
is_updating = False


@receiver(post_save, sender=Army)
def change_evolve_field(sender, instance, created, **kwargs):
    global is_updating
    if not is_updating:  # Проверяем, что обновление еще не началось
        if instance.cards >= instance.max_cards:
            instance.can_evolve = True
            # Устанавливаем флаг, чтобы избежать рекурсии
            is_updating = True
            instance.save(update_fields=['can_evolve'])
            # Сбрасываем флаг после сохранения
            is_updating = False


@receiver(post_save, sender=Person)
def assign_existing_tasks_to_player(sender, instance, created, **kwargs):
    """Присваиваем все существующие задачи игроку при создании нового игрока."""
    if created:
        tasks = Task.objects.all()
        for task in tasks:
            PlayerTask.objects.create(person=instance, task=task)


@receiver(post_save, sender=Task)
def assign_task_to_all_players(sender, instance, created, **kwargs):
    """Присваиваем новую задачу всем существующим игрокам."""
    if created:
        players = Person.objects.all()
        player_tasks = [PlayerTask(person=player, task=instance) for player in players]
        PlayerTask.objects.bulk_create(player_tasks)
