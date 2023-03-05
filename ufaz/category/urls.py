from django.urls import path
from .views import CategoryListAPIView

urlpatterns = [
    # URL for connecting with category
    # https://localhost:8000/api/v1/category/
    path('', CategoryListAPIView.as_view(), name='category')
]
