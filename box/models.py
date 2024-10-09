from django.db import models


class Box(models.Model):
    """Модель для сундука."""
    name = models.CharField(max_length=100, verbose_name='Название сундука')
    description = models.TextField(verbose_name='Описание сундука')
    currency_min = models.IntegerField(default=100, verbose_name='Минимальное количество монет')
    currency_max = models.IntegerField(default=200, verbose_name='Максимальное количество монет')
    card_count_min = models.IntegerField(default=10, verbose_name='Минимальное количество карт')
    card_count_max = models.IntegerField(default=15, verbose_name='Максимальное количество карт')
    is_active = models.BooleanField(default=True, verbose_name='Активен/не активен')

    def __str__(self):
        return self.name


# class ChestItem(models.Model):
#     """Содержимое сундука."""
#     chest = models.ForeignKey(Box, on_delete=models.CASCADE, related_name='items')
#     name = models.CharField(max_length=100, verbose_name='Название приза')
#     item_id = models.IntegerField(verbose_name='ID складируемой сущности')
#     drop_probability = models.FloatField(verbose_name='Вероятность выпадения')
#     min_amount = models.IntegerField(verbose_name='Минимальное количество')
#     max_amount = models.IntegerField(verbose_name='Максимальное количество')
