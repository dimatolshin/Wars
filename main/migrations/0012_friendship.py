# Generated by Django 5.0.6 on 2024-07-23 17:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_army_statistics'),
    ]

    operations = [
        migrations.CreateModel(
            name='FriendShip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('friends', models.ManyToManyField(blank=True, null=True, related_name='friends', to='main.person')),
                ('me', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='friendship_me', to='main.person')),
            ],
        ),
    ]
