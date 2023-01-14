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
def book_title_query_results(request, title_query):
    books = Book.objects.filter(title__icontains=title_query)[:5]
    print(books)

    if len(books) == 0:
        return Response({
            "success": False,
            "book_name": title_query,
            "error": "Book not found."
        })

    books_list = []
    for book in books:
        books_list.append({
            "title": book.title,
            "author": book.author,
            "cover_image": book.image_url
        })

    return Response({
        "success": True,
        "book_name": title_query,
        "books": books_list
    })


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
    )[1:6]

    viewing_book = Book.objects.get(title=book_name)

    data = []
    for i in similar_items:
        title = pt.index[i[0]]
        book = Book.objects.get(title=title)
        item = {
            "title": book.title,
            "author": book.author,
            "cover_image": book.image_url
        }
        data.append(item)

    return Response({
        "success": True,
        "book_name": book_name,
        "author": viewing_book.author,
        "cover_image": viewing_book.image_url,
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
