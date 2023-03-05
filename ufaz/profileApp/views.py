from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from orders.models import OrdersModel

# Profile system and history system
class ProfileAPIView(APIView):
    
    def get(self, request):
        # Get user's data
        userData = User.objects.filter(username=request.user.username).values()
        historyData = list(OrdersModel.objects.filter(customerUser=request.user.username, history=True).values())

        data = {
            'user'     : request.user.username,
            'userData' : userData,
            'history'  : historyData,
        }

        return Response(data)