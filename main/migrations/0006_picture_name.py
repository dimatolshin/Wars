# Generated by Django 5.0.6 on 2024-07-10 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_picture_army_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='name',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
    ]
