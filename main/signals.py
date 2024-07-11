from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Person
from .tasks import energy_task


@receiver(post_save, sender=Person)
def my_changed(sender, instance, created, **kwargs):
    if 'now_energy' in kwargs.get('update_fields', []) and instance.now_energy != instance.start_energy:
        energy_task.apply_async((instance.id,), countdown=180)
