# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-27 15:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logreg', '0002_auto_20160923_1649'),
    ]

    operations = [
        migrations.RenameField(
            model_name='users',
            old_name='fname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='users',
            old_name='lname',
            new_name='username',
        ),
    ]
