import os
import pickle
import numpy as np

from django.conf import settings

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Book

core_path = os.path.join(settings.BASE_DIR, "core/")

pt = pickle.load(open(core_path + "pt.pkl", "rb"))
books = pickle.load(open(core_path + "books.pkl", "rb"))
similarity_scores = pickle.load(
    open(core_path + "similarity_scores.pkl", "rb"))


@api_view(["GET"])
def recommend_books(request, book_name):
    if not book_name in pt.index:
        return Response({
            "success": False,
            "book_name": book_name,
            "error": "Book not found."
        })

    index = np.where(pt.index == book_name)[0][0]
    similar_items = sorted(
        list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True
    )[0:6]

    book = books[books["Book-Title"] == book_name].iloc[0]

    data = []
    for i in similar_items:
        temp_df = books[books["Book-Title"] == pt.index[i[0]]]
        item = {
            "title": temp_df.drop_duplicates("Book-Title")["Book-Title"].values[0],
            "author": temp_df.drop_duplicates("Book-Title")["Book-Author"].values[0],
            "cover_image": temp_df.drop_duplicates("Book-Title")["Image-URL-M"].values[0]
        }
        data.append(item)

    return Response({
        "success": True,
        "book_name": book_name,
        "author": book["Book-Author"],
        "cover_image": book["Image-URL-M"],
        "similar_books": data
    })


@api_view(["GET"])
def book_title_autocomplete(request, book_name):
    books = Book.objects.filter(
        title__contains=book_name)[:5].values_list("title", flat=True)
    return Response({
        "book_name": book_name,
        "suggestions": books
    })
