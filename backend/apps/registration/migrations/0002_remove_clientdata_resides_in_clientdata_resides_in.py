# Generated by Django 5.1.3 on 2025-01-18 21:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0001_initial'),
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientdata',
            name='resides_in',
        ),
        migrations.AddField(
            model_name='clientdata',
            name='resides_in',
            field=models.ForeignKey(default=49, on_delete=django.db.models.deletion.CASCADE, to='common.country'),
            preserve_default=False,
        ),
    ]
