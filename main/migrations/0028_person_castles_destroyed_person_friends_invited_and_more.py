# Generated by Django 5.0.6 on 2024-10-08 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0027_task_playertask'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='castles_destroyed',
            field=models.IntegerField(default=0, verbose_name='Разорено замков'),
        ),
        migrations.AddField(
            model_name='person',
            name='friends_invited',
            field=models.IntegerField(default=0, verbose_name='Приглашено друзей'),
        ),
        migrations.AddField(
            model_name='person',
            name='money_spent',
            field=models.IntegerField(default=0, verbose_name='Потрачено монет'),
        ),
        migrations.AddField(
            model_name='person',
            name='units_produced',
            field=models.IntegerField(default=0, verbose_name='Выпущено юнитов'),
        ),
        migrations.AddField(
            model_name='person',
            name='upgrades_made',
            field=models.IntegerField(default=0, verbose_name='Сделано апгрейдов'),
        ),
        migrations.AddField(
            model_name='playertask',
            name='current_level',
            field=models.IntegerField(default=1, verbose_name='Текущий уровень многоразовой задачи'),
        ),
    ]
