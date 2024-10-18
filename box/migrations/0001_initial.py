# Generated by Django 5.0.6 on 2024-10-09 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Box',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название сундука')),
                ('description', models.TextField(verbose_name='Описание сундука')),
                ('currency_min', models.IntegerField(default=100, verbose_name='Минимальное количество монет')),
                ('currency_max', models.IntegerField(default=200, verbose_name='Максимальное количество монет')),
                ('card_count_min', models.IntegerField(default=10, verbose_name='Минимальное количество карт')),
                ('card_count_max', models.IntegerField(default=15, verbose_name='Максимальное количество карт')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активен/не активен')),
            ],
        ),
    ]