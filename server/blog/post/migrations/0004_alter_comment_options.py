# Generated by Django 4.1.7 on 2023-04-01 06:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_comment_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comment',
            options={'ordering': ['created_at']},
        ),
    ]
