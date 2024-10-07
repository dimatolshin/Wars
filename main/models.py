from datetime import timedelta

from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone


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
    can_evolve=models.BooleanField(default=False)


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
    """Задания для выполнения"""
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
    """Связываем задачи с игроком"""
    person = models.ForeignKey('Person', on_delete=models.CASCADE, related_name='task_player', verbose_name='Игрок')
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='player_tasks', verbose_name='Задача')
    start_time = models.DateTimeField(null=True, blank=True, verbose_name='Время начала')
    completed = models.BooleanField(default=False, verbose_name='Выполнено')
    add_flag = models.BooleanField(default=False, verbose_name='Доп. флаг')

    def check_completion(self):
        """Проверка завершения задачи для одноразовых задач с задержкой 1 час"""
        if not self.completed and self.task.task_type == 'one_time':
            if self.start_time and timezone.now() >= self.start_time + timedelta(minutes=1):
                self.completed = True
                self.save()
                # добавить игроку монеты за выполнение задачи
        elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'units':
            pass
        elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'upgrades':
            pass
        elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'destroy_castle':
            pass
        elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'spend_money':
            pass
        elif not self.completed and self.task.task_type == 'accumulative' and self.task.condition_type == 'invite_friends':
            pass

    def start_task_player(self):
        """При вызове представления, задаём полю значение начало выполнение задачи"""
        self.start_time = timezone.now()
        self.save()
