# Generated by Django 4.1.6 on 2023-03-05 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_remove_providerposts_user_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='providerposts',
            name='category',
            field=models.CharField(default='', max_length=150, verbose_name='Category'),
        ),
    ]
