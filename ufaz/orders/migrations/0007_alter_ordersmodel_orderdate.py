# Generated by Django 4.1.6 on 2023-03-05 06:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_alter_ordersmodel_orderdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordersmodel',
            name='orderDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 5, 6, 29, 59, 618692), verbose_name='Date'),
        ),
    ]
