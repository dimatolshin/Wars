from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Person
from .tasks import energy_task


@receiver(post_save, sender=Person)
def my_changed(sender, instance, created, **kwargs):
    task_id = f'energy_task_{instance.id}'
    if not cache.get(task_id):
        cache.set(task_id, 'in_progress', timeout=600 * 5)
        energy_task.apply_async((instance.id,), countdown=5)
