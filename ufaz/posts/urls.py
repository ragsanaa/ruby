from django.urls import path
from . import views

urlpatterns = [
    # URL for geting or adding post. GET and POST request
    # http://localhost:8000/api/v1/posts/
    path('', views.PostsAPIView.as_view(), name='posts'),
    # URL for geting, adding, updating, removing selected post. GET, POST, PUT and DELETE requests
    # http://localhost:8000/api/v1/posts/{ any product's id }/
    path('<int:pk>/', views.ProductAPIView.as_view(), name='product'),
]
