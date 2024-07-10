# Generated by Django 5.0.6 on 2024-07-10 14:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Army',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('speed', models.IntegerField(default=1)),
                ('bring_money', models.IntegerField(default=1)),
                ('energy', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lvl', models.IntegerField(default=1)),
                ('money', models.IntegerField(default=0)),
                ('start_energy', models.IntegerField(default=100)),
                ('now_energy', models.IntegerField(default=100)),
                ('name', models.CharField(max_length=100, unique=True)),
                ('tg_id', models.IntegerField()),
                ('army', models.ManyToManyField(blank=True, null=True, related_name='person', to='main.army')),
            ],
        ),
        migrations.CreateModel(
            name='Castle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lvl', models.IntegerField(default=1)),
                ('start_hp', models.IntegerField(default=100)),
                ('now_hp', models.IntegerField(default=100)),
                ('person', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='castle', to='main.person')),
            ],
        ),
    ]
