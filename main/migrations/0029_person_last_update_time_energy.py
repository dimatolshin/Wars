# Generated by Django 5.0.6 on 2024-10-09 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0028_person_castles_destroyed_person_friends_invited_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='last_update_time_energy',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Время для вычисления энергия за время афк'),
        ),
    ]
