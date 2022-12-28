import os
import pickle
from django.core.management.base import BaseCommand
from django.conf import settings
from core.models import Book

core_path = os.path.join(settings.BASE_DIR, "core/")
pt = pickle.load(open(core_path + "pt.pkl", "rb"))


class Command(BaseCommand):
    help = 'Fills db with Book objects'

    def handle(self, *args, **kwargs):
        for title in pt.index:
            Book(title=title).save()
