# Generated by Django 4.1.6 on 2023-03-05 09:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0023_alter_ordersmodel_orderdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordersmodel',
            name='orderDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 5, 9, 2, 24, 691770), verbose_name='Date'),
        ),
    ]
