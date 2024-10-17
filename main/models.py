import json
import os
from datetime import timedelta

from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone


file_path = os.path.join(os.path.dirname(__file__), 'info_for_db.json')
with open(file_path, 'r') as file:
    data = json.load(file)


class Person(models.Model):
    lvl = models.IntegerField(default=1)
    money = models.IntegerField(default=0)
    crystal = models.IntegerField(default=0)
    start_energy = models.IntegerField(default=500)
    now_energy = models.IntegerField(default=500)
    recharge_energy = models.IntegerField(default=1)
    name = models.CharField(max_length=100)
    tg_id = models.BigIntegerField(unique=True)
    army = models.ManyToManyField('Army', related_name='person', null=True, blank=True)
    my_army = models.ManyToManyField('Army', related_name='my_army', null=True, blank=True)
    units_produced = models.IntegerField(default=0, verbose_name='Выпущено юнитов')  # Добавил в class Tap(APIView)
    upgrades_made = models.IntegerField(default=0, verbose_name='Сделано апгрейдов')  # class Upgrade_army_damage(APIView) и class Upgrade_army_speed(APIView) и class EvolveCards(APIView)
    castles_destroyed = models.IntegerField(default=0, verbose_name='Разорено замков')  # @receiver(post_save, sender=Castle)
    money_spent = models.IntegerField(default=0, verbose_name='Потрачено монет')  # class Upgrade_army_damage(APIView) и class Upgrade_army_speed(APIView)
    friends_invited = models.IntegerField(default=0, verbose_name='Приглашено друзей')  # class AllFriends(APIView):

    def __str__(self):
        return f'Имя:{self.name}, id:{self.pk}, tg_id:{self.tg_id}'


class Castle(models.Model):
    person = models.OneToOneField(Person, related_name='castle', on_delete=models.CASCADE)
    lvl = models.IntegerField(default=1)
    start_hp = models.IntegerField(default=100000)
    now_hp = models.IntegerField(default=0)

    def __str__(self):
        return f'Игрок:{self.person.pk}, lvl:{self.lvl}, hp:{self.now_hp}'


class Picture(models.Model):
    name = models.CharField(max_length=40)
    image = models.ImageField(null=False, blank=False, upload_to='media')

    def __str__(self):
        return f'имя: {self.name}'


class Army(models.Model):
    image = models.ForeignKey(Picture, on_delete=models.SET_NULL, related_name='army', null=True, blank=True)
    id_person = models.IntegerField(default=1)
    name = models.CharField(max_length=100)
    speed = models.FloatField(default=1.0)
    damage = models.IntegerField(default=1)
    energy = models.IntegerField(default=1)
    lvl_speed = models.IntegerField(default=1)
    price_speed = models.IntegerField(default=1)
    lvl_damage = models.IntegerField(default=1)
    price_damage = models.IntegerField(default=1)
    evolve_lvl = models.IntegerField(default=1)
    cards = models.IntegerField(default=0)
    max_cards = models.IntegerField(default=0)
    max_lvl_upgrade = models.IntegerField(default=5)
    can_evolve = models.BooleanField(default=False)
    capacity = models.IntegerField(default=1, verbose_name='Максимальное количество юнитов этого типа')
    lvl_capacity = models.IntegerField(default=1)
    price_capacity = models.IntegerField(default=1)
    current_units = models.IntegerField(default=1, verbose_name='Текущее количество юнитов')

    def calculate_cp(self):
        CP_GAIN_TABLE = {
            'lvl_speed_cp': 5,
            'lvl_damage_cp': 15,
            'lvl_capacity_cp': 3,
            'evolve_lvl_cp': 10
        }

        cp = (self.evolve_lvl * CP_GAIN_TABLE['evolve_lvl_cp']) + \
             (self.lvl_speed * CP_GAIN_TABLE['lvl_speed_cp']) + \
             (self.lvl_damage * CP_GAIN_TABLE['lvl_damage_cp']) + \
             (self.lvl_capacity * CP_GAIN_TABLE['lvl_capacity_cp'])

        return cp

    def __str__(self):
        return f'Имя:{self.name}, Скорость:{self.speed}, Урон:{self.damage}, lvl.speed:{self.lvl_speed}, lvl.damage:{self.lvl_damage}'


class ReferralSystem(models.Model):
    referral = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='referral')
    new_person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='new_person')
    referral_bonus = models.BooleanField(default=True)
    new_person_bonus = models.BooleanField(default=True)

    def __str__(self):
        return f'me : {self.referral.name}____new_person:{self.new_person.name} , id:{self.id}'


class Visit(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='visit')
    date = models.DateField(auto_now_add=True)
    streak = models.PositiveIntegerField(default=1)
    week_streak = models.IntegerField(default=1)
    get_bonus = models.BooleanField(default=False)
    numbers_list = ArrayField(models.IntegerField(), blank=True, default=list)

    def __str__(self):
        return f"{self.person.name} - {self.date} Стрик: {self.streak}), Недельный стрик:{self.week_streak}"


class PassiveEarning(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='passive_earning')
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    image = models.ForeignKey(Picture, on_delete=models.SET_NULL, related_name='passive_earning', null=True, blank=True)
    price=models.PositiveIntegerField(default=1)
    profit_in_hour=models.PositiveIntegerField(default=1)
    cooldown = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.person.name} Имя:{self.name}, цена:{self.price}, прибыль в час:{self.profit_in_hour}"


class Task(models.Model):
    """
        Задания для выполнения.

        Поля:
        - `name`: Название задачи.
        - `picture`: Картинка задачи (связь с моделью Picture).
        - `dop_name`: Дополнительное название задачи.
        - `description`: Описание задачи.
        - `task_type`: Тип задачи (одноразовая или накопительная).
        - `condition_type`: Тип условия задачи (например, выпустить N юнитов, потратить N монет и т.д.).
        - `condition_value`: Значение условия (сколько нужно выполнить для завершения задачи).
        - `condition_now`: Текущее значение условия (сколько уже выполнено).
        - `reward_currency`: Награда в монетах за выполнение задачи.
        - `chest`: Флаг, указывающий, дает ли задача сундук в качестве награды.
        - `is_active`: Флаг активности задачи.

        Типы задач (`task_type`):
        - `one_time`: Одноразовая задача.
        - `accumulative`: Накопительная задача.

        Типы условий (`condition_type`):
        - `units`: Выпустить N юнитов.
        - `upgrades`: Сделать N апгрейдов.
        - `destroy_castle`: Разорить N замков.
        - `spend_money`: Потратить N монет.
        - `invite_friends`: Пригласить N друзей.
    """
    TASK_TYPE_CHOICES = [
        ('one_time', 'Одноразовое'),
        ('accumulative', 'Накопительное'),
    ]

    CONDITION_TYPE_CHOICES = [
        ('units', 'Выпустить N unit'),
        ('upgrades', 'Сделать N upgrade'),
        ('destroy_castle', 'Разорить N замок'),
        ('spend_money', 'Потратить N монет'),
        ('invite_friends', 'Пригласить N друга/друзей'),
    ]

    name = models.CharField(max_length=50, verbose_name='Название задачи', default='')
    picture = models.ForeignKey(Picture, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Картинка')
    dop_name = models.CharField(max_length=50, blank=True, null=True, verbose_name='Доп. название задачи')
    description = models.CharField(max_length=255, verbose_name='Описание задачи', default='')
    task_type = models.CharField(max_length=20, choices=TASK_TYPE_CHOICES, default='one_time')
    condition_type = models.CharField(max_length=20, blank=True, null=True, choices=CONDITION_TYPE_CHOICES,
                                      verbose_name='Тип условия')
    condition_value = models.IntegerField(default=0,
                                          verbose_name='Значение условия')  # Указываем количество для CONDITION_TYPE_CHOICES
    condition_now = models.IntegerField(default=0,
                                        verbose_name='Текущее значение условия') # Указываем текущее достижение у юзера для CONDITION_TYPE_CHOICES
    reward_currency = models.IntegerField(default=0, verbose_name='Награда (монет)')
    chest = models.BooleanField(default=False, verbose_name='Награда (сундук)')
    is_active = models.BooleanField(default=True, verbose_name="Активность задачи")


class PlayerTask(models.Model):
    """
        Связываем задачи с игроком.

        Поля:
        - `person`: Игрок, связанный с задачей (связь с моделью Person).
        - `task`: Задача, связанная с игроком (связь с моделью Task).
        - `start_time`: Время начала задачи.
        - `completed`: Флаг, указывающий, выполнена ли задача.
        - `add_flag`: Дополнительный флаг.
        - `current_level`: Текущий уровень многоразовой задачи.

        Методы:
        - `check_task_completion`: Проверяет, выполнена ли задача и обновляет состояние игрока.
        - `check_completion`: Проверяет завершение задачи для одноразовых задач с задержкой 1 час и для накопительных задач.

        Логика проверки завершения задач:
        - Для одноразовых задач (`one_time`): Задача считается выполненной, если прошло 1 час с момента начала.
        - Для накопительных задач (`accumulative`): Задача считается выполненной, если текущее значение условия достигло
            или превысило значение условия.
    """
    person = models.ForeignKey('Person', on_delete=models.CASCADE, related_name='task_player', verbose_name='Игрок')
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='player_tasks', verbose_name='Задача')
    start_time = models.DateTimeField(null=True, blank=True, verbose_name='Время начала')
    completed = models.BooleanField(default=False, verbose_name='Выполнено')
    add_flag = models.BooleanField(default=False, verbose_name='Доп. флаг')
    current_level = models.IntegerField(default=1, verbose_name='Текущий уровень многоразовой задачи')

    def check_task_completion(self, condition_type, current_level_data, produced_value, reward_currency):
        if produced_value >= current_level_data["condition_value"]:
            self.person.money += reward_currency
            self.person.save(update_fields=['money'])
            self.current_level += 1
            # Проверяем, существует ли следующий уровень
            next_level_data = next(
                (level for level in data["PlayerTask"][condition_type] if level["level"] == self.current_level), None
            )
            if next_level_data is None:
                self.completed = True  # Задание завершено, если следующего уровня нет
                self.save()

    def check_completion(self):
        """Проверка завершения задачи для одноразовых задач с задержкой 1 час"""
        if not self.completed and self.task.task_type == 'one_time':
            if self.start_time and timezone.now() >= self.start_time + timedelta(minutes=1):
                self.completed = True
                self.start_time = None
                self.save()
                self.person.money += 30000
                self.person.save(update_fields=['money'])

        elif not self.completed and self.task.task_type == 'accumulative':
            current_level_data = None

            if self.task.condition_type == 'units':
                current_level_data = next(
                    (level for level in data["PlayerTask"]["units"] if level["level"] == self.current_level), None)
                self.check_task_completion("units", current_level_data, self.person.units_produced,
                                           current_level_data["reward_currency"])

            elif self.task.condition_type == 'upgrades':
                current_level_data = next(
                    (level for level in data["PlayerTask"]["upgrades"] if level["level"] == self.current_level), None)
                self.check_task_completion("upgrades", current_level_data, self.person.upgrades_made,
                                           current_level_data["reward_currency"])

            elif self.task.condition_type == 'destroy_castle':
                current_level_data = next(
                    (level for level in data["PlayerTask"]["destroy_castle"] if level["level"] == self.current_level), None)
                self.check_task_completion("destroy_castle", current_level_data, self.person.castles_destroyed,
                                           current_level_data["reward_currency"])

            elif self.task.condition_type == 'spend_money':
                current_level_data = next(
                    (level for level in data["PlayerTask"]["spend_money"] if level["level"] == self.current_level), None)
                self.check_task_completion("spend_money", current_level_data, self.person.money_spent,
                                           current_level_data["reward_currency"])

            elif self.task.condition_type == 'invite_friends':
                current_level_data = next(
                    (level for level in data["PlayerTask"]["invite_friends"] if level["level"] == self.current_level), None)
                self.check_task_completion("invite_friends", current_level_data, self.person.friends_invited,
                                           current_level_data["reward_currency"])

                # elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'upgrades':
                #     # Получаем данные о текущем уровне многоразовой задачи
                #     current_level_data = next(
                #         (level for level in data["PlayerTask"]["upgrades"] if level["level"] == self.current_level), None)
                #     if current_level_data and self.person.upgrades_made >= current_level_data["condition_value"]:
                #         self.person.money += current_level_data["reward_currency"]
                #         self.person.save(update_fields=['money'])
                #         # Увеличиваем уровень текущей задачи
                #         self.current_level += 1
                #         # Проверяем, существует ли следующий уровень
                #         next_level_data = next(
                #             (level for level in data["PlayerTask"]["units"] if level["level"] == self.current_level), None)
                #         if next_level_data is None:
                #             self.completed = True  # Задание завершено, если следующего уровня нет
                #             self.save()

    def start_task_player(self):
        """При вызове представления, задаём полю значение начало выполнение задачи"""
        self.start_time = timezone.now()
        self.save()
