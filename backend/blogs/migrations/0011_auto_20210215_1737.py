# Generated by Django 3.1 on 2021-02-15 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0010_article_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='description',
            field=models.TextField(max_length=1000),
        ),
    ]
