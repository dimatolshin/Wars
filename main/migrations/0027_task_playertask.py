# Generated by Django 5.0.6 on 2024-10-07 10:20

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0026_army_can_evolve_passiveearning'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=50, verbose_name='Название задачи')),
                ('dop_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='Доп. название задачи')),
                ('description', models.CharField(default='', max_length=255, verbose_name='Описание задачи')),
                ('task_type', models.CharField(choices=[('one_time', 'Одноразовое'), ('accumulative', 'Накопительное')], default='one_time', max_length=20)),
                ('condition_type', models.CharField(blank=True, choices=[('units', 'Выпустить N unit'), ('upgrades', 'Сделать N upgrade'), ('destroy_castle', 'Разорить N замок'), ('spend_money', 'Потратить N монет'), ('invite_friends', 'Пригласить N друга/друзей')], max_length=20, null=True, verbose_name='Тип условия')),
                ('condition_value', models.IntegerField(default=0, verbose_name='Значение условия')),
                ('condition_now', models.IntegerField(default=0, verbose_name='Текущее значение условия')),
                ('reward_currency', models.IntegerField(default=0, verbose_name='Награда (монет)')),
                ('chest', models.BooleanField(default=False, verbose_name='Награда (сундук)')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активность задачи')),
                ('picture', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.picture', verbose_name='Картинка')),
            ],
        ),
        migrations.CreateModel(
            name='PlayerTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField(blank=True, null=True, verbose_name='Время начала')),
                ('completed', models.BooleanField(default=False, verbose_name='Выполнено')),
                ('add_flag', models.BooleanField(default=False, verbose_name='Доп. флаг')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='task_player', to='main.person', verbose_name='Игрок')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player_tasks', to='main.task', verbose_name='Задача')),
            ],
        ),
    ]
