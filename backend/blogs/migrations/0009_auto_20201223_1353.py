# Generated by Django 3.1 on 2020-12-23 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0008_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.TextField(choices=[('Tech', 'Tech'), ('Business', 'Business'), ('UI/UX', 'UI/UX')], null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='description',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(max_length=225),
        ),
    ]
