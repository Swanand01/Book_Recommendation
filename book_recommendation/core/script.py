import os
import pickle
from django.conf import settings
from .models import Book

core_path = os.path.join(settings.BASE_DIR, "core/")
pt = pickle.load(open(core_path + "pt.pkl", "rb"))

for title in pt.index:
    Book(title=title).save()
