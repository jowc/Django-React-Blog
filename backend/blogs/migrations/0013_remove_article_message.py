# Generated by Django 3.1 on 2021-02-17 22:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0012_article_message'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='message',
        ),
    ]