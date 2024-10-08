# Generated by Django 5.0.6 on 2024-09-25 12:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_person_crystal_visit_week_streak'),
    ]

    operations = [
        migrations.CreateModel(
            name='Daly_Bonus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.IntegerField(default=1)),
                ('get_bonus', models.BooleanField(default=False)),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='daly_bonus', to='main.person')),
            ],
        ),
    ]
