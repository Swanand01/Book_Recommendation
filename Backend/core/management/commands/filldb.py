import os
import pickle
from django.core.management.base import BaseCommand
from django.conf import settings
from core.models import Book

core_path = os.path.join(settings.BASE_DIR, "core/")
pt = pickle.load(open(core_path + "pt.pkl", "rb"))
books = pickle.load(open(core_path + "books.pkl", "rb"))


class Command(BaseCommand):
    help = 'Fills db with Book objects'

    def handle(self, *args, **kwargs):
        for title in pt.index:
            temp_df = books[books["Book-Title"] == title]
            image_url = temp_df.drop_duplicates(
                "Book-Title")["Image-URL-L"].values[0]
            author = temp_df.drop_duplicates(
                "Book-Title")["Book-Author"].values[0]

            Book(title=title, image_url=image_url, author=author).save()
