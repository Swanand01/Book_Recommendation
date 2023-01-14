from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=500)
    image_url = models.URLField()
    author = models.CharField(max_length=250)

    def __str__(self):
        return self.title
