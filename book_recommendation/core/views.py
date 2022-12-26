from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def recommend_book(request):
    return Response({
        "MSG": "OK"
    })
