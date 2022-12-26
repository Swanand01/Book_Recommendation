from django.urls import path

from .views import recommend_book

urlpatterns = [
    path('recommend-book/', recommend_book, name='recommend_book')
]
