# Generated by Django 5.0.6 on 2024-09-25 13:27

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0022_daly_bonus'),
    ]

    operations = [
        migrations.AddField(
            model_name='visit',
            name='numbers_list',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), blank=True, default=list, size=None),
        ),
    ]
