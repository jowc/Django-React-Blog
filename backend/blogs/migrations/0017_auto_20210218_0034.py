# Generated by Django 3.1 on 2021-02-17 23:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0016_auto_20210218_0032'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['-publish_date', '-last_update', '-timestamp']},
        ),
    ]
