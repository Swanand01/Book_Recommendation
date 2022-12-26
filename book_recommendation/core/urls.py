from django.urls import path

from .views import recommend_book, book_title_autocomplete

urlpatterns = [
    path('recommend-book/<str:book_name>',
         recommend_book, name='recommend_book'),
    path('autocomplete/<str:book_name>',
         book_title_autocomplete, name='book_title_autocomplete')
]
