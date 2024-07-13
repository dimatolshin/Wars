from django.core.cache import cache
from celery import shared_task
from .models import Person


@shared_task
def energy_task(instance_id):
    task_id = f'energy_task_{instance_id}'
    instance = Person.objects.get(id=instance_id)
    if instance.now_energy < instance.start_energy:
        instance.now_energy += 1
        instance.save(update_fields=['now_energy',])
        energy_task.apply_async((instance.id,), countdown=5)
    else:
        cache.delete(task_id)
