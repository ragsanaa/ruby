# Generated by Django 4.1.6 on 2023-03-05 06:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0013_alter_ordersmodel_orderdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordersmodel',
            name='orderDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 5, 6, 40, 12, 395039), verbose_name='Date'),
        ),
    ]
