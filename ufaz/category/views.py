from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import CategoryModel
from .serializers import CategoryModelSerializer

# Get category data from database
class CategoryListAPIView(ListAPIView):
    # Object which we use for connecting with database
    queryset = CategoryModel.objects.all()
    # Class for formating data to json format
    serializer_class = CategoryModelSerializer
    # Class for giving permissions
    permission_classes = (IsAuthenticatedOrReadOnly,)
