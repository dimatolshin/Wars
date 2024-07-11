from celery import shared_task
from .models import Person

from django.core.cache import cache
from celery import shared_task
from .models import Person


def energy_task(instance_id):
    task_id = f'energy_task_{instance_id}'
    flag = cache.get(task_id)
    if flag == 'in_progress':
        #ДОДЕЛАТЬ !!!!!!
        # Устанавливаем флаг в кэше
        cache.set(task_id, 'in_progress', timeout=50 * 6)  # timeout можно настроить
        try:
            instance = Person.objects.get(id=instance_id)
            if instance.now_energy < instance.start_energy:
                instance.now_energy += 1
                instance.save(update_fields=['now_energy'])
                # Планируем следующий запуск задачи
                energy_task.apply_async((instance.id,), countdown=5)
            # Если энергия достигла максимума, очищаем кэш
            if instance.now_energy == instance.start_energy:
                cache.delete(task_id)
        except Person.DoesNotExist:
            # Обработка случая, если экземпляр не найден
            pass
        finally:
            # Удаляем флаг из кэша, если задача завершена
            if instance.now_energy == instance.start_energy:
                cache.delete(task_id)
