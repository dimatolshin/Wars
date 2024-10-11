from django.core.cache import cache
from celery import shared_task
from .models import Person
import time


@shared_task(acks_late=True, reject_on_worker_lost=True)
def reset_daily_bonus(batch_size=100, delay=1):
    user_to_update = Person.objects.filter(visit__get_bonus=True)
    total_user = user_to_update.count()

    for start in range(0, total_user, batch_size):
        end = start + batch_size

        Person.objects.filter(pk__in=user_to_update[start:end]).update(visit__get_bonus=False)
        time.sleep(delay)
