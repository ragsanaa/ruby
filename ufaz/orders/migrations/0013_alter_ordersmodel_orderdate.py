# Generated by Django 4.1.6 on 2023-03-05 06:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0012_alter_ordersmodel_orderdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordersmodel',
            name='orderDate',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 5, 6, 37, 9, 911218), verbose_name='Date'),
        ),
    ]