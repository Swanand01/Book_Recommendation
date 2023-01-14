from django.urls import path

from .views import recommend_books, book_title_autocomplete, book_title_query_results

urlpatterns = [
    path('recommend-books/<str:book_name>',
         recommend_books, name='recommend_books'),
    path('autocomplete/<str:book_name>',
         book_title_autocomplete, name='book_title_autocomplete'),
    path('search-books/<str:title_query>',
         book_title_query_results, name='search_books')
]
