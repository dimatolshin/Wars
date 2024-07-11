from celery import shared_task
from .models import Person


@shared_task
def energy_task(instance_id):
    instance = Person.objects.get(id=instance_id)
    if instance.now_energy != instance.start_energy:
        instance.now_energy += 1
        instance.save()
