from django.urls import path

from .views import recommend_books, book_title_autocomplete

urlpatterns = [
    path('recommend-books/<str:book_name>',
         recommend_books, name='recommend_books'),
    path('autocomplete/<str:book_name>',
         book_title_autocomplete, name='book_title_autocomplete')
]
