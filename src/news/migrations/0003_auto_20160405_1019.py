# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-05 10:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_auto_20160405_1009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='index_img',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
    ]