from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import ProviderPosts
from .serializers import PostsSerializer
from orders.models import OrdersModel
from django.contrib.auth.models import User
from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from datetime import datetime
"""
GET request -> get all posts from database
POST request -> add post to database
"""
class PostsAPIView(ListCreateAPIView):
    # Model class
    queryset = ProviderPosts.objects.all()
    # Serializer class
    serializer_class = PostsSerializer
    # Permission class
    permission_classes = (IsAuthenticatedOrReadOnly,)
"""
GET request -> get product's data from database
POST request -> add product to database
PUT request -> update product's data from database
DELETE request -> delete product's data from database
"""
class ProductAPIView(APIView):
    # Permission classes
    permission_classes = (IsAdminOrReadOnly, IsOwnerOrReadOnly)
    
    # Function for GET request
    # Returns posts data from database
    def get(sefl, request, pk):
        product = ProviderPosts.objects.filter(pk=pk)

        return Response(PostsSerializer(product, many=True).data)
    
    # Function for POST request
    # Returns True if record added successfully
    def post(self, request, pk):
        product = list(ProviderPosts.objects.filter(pk=pk).values())
        customer = request.user.username
        success = False

        if(request.method == "POST"):
            # Create data in Orders table
            newOrder = OrdersModel.objects.create(
                orderTitle = product[0]["title"],
                customerUser = customer,
                providerUser = product[0]["providerUser"],
                cost = product[0]["cost"],
                orderDate = product[0]["date"],
                orderCategory = product[0]["category"]
            )

            success = True
            # Return True
            return Response(PostsSerializer({'success' : True }, many=True).data)
        else:
            # Return False
            return Response(PostsSerializer({'success' : False }, many=True).data)
    
    # Function for DELETE request
    # Returns True if record deleted successfully
    def delete(self, request, pk):
        product = list(ProviderPosts.objects.filter(pk=pk).values())
        customer = request.user.username

        try:
            ProviderPosts.objects.filter(pk=pk).delete()
            
            # Returns True
            return Response(PostsSerializer({'success' : True }, many=True).data)
        except Exception as err:
            print(err)
            # Returns False
            return Response(PostsSerializer({'success' : True }, many=False).data)

        return Response(PostsSerializer({'success' : True }, many=True).data)
    
    # Function for PUT requests
    # Returns True if record was changed successfully
    def put(self, request, pk):
        try:
            # Update record
            ProviderPosts.objects.filter(pk=pk).update(
                title = request.PUT["title"],
                article = request.PUT["article"],
                date = datetime.now(),
                cost = request.PUT["cost"]
            )

            # Return True
            return Response(PostsSerializer({'success' : True }, many=True).data)
        except Exception as err:
            print(err)

            # Return False
            return Response(PostsSerializer({'success' : False }, many=True).data)