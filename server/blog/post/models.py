from django.db import models

from utils.mixins import TimeStampedMixin


class Post(TimeStampedMixin):
    title = models.CharField(max_length=100)
    body = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Comment(TimeStampedMixin):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return '{} commented on {}'.format(self.user, self.post)
