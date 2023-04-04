from django.db import models

from utils.mixins import TimeStampedMixin

class PostCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Post(TimeStampedMixin):
    title = models.CharField(max_length=100)
    body = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    category = models.ManyToManyField(PostCategory, blank=True, null=True)

    def __str__(self):
        return self.title


class Comment(TimeStampedMixin):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.text