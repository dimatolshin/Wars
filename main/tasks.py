from django.core.cache import cache
from celery import shared_task
from .models import Person
import os
import json


file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


@shared_task(acks_late=True,reject_on_worker_lost=True)
def energy_task(instance_id):
    task_id = f'energy_task_{instance_id}'
    instance = Person.objects.get(id=instance_id)
    if instance.now_energy < instance.start_energy:
        instance.now_energy += data["Person"][f"{instance.lvl}"]["recharge_energy"]
        if instance.now_energy >=instance.start_energy:
            instance.now_energy = instance.start_energy
            instance.save(update_fields=['now_energy', ])
            cache.delete(task_id)
        instance.save(update_fields=['now_energy',])
        energy_task.apply_async((instance.id,), countdown=1)
    else:
        cache.delete(task_id)


@shared_task(acks_late=True,reject_on_worker_lost=True)
def reset_daily_bonus():
    Person.objects.filter(daly_bonus__get_bonus=True).update(daly_bonus__get_bonus=False)
