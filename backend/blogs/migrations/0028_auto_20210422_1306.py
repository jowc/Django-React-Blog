# Generated by Django 3.1 on 2021-04-22 12:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0027_auto_20210422_1258'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='description',
            new_name='content',
        ),
    ]
