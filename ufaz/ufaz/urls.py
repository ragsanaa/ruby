"""ufaz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path

# API version - 1
urlpatterns = [
    # URL for admin panel
    path('admin/', admin.site.urls),
    # URL for posts application 
    path('api/v1/posts/', include('posts.urls')),
    # URL for register (Djoser)
    path('api/v1/auth/', include('djoser.urls')),
    # URL login, logout (Djoser)
    re_path('api/v1/authenticate/', include('djoser.urls.authtoken')),
    # URL for categories app
    path('api/v1/categories/', include('category.urls')),
    # URL for profile apps
    path('api/v1/profile/', include('profileApp.urls')),
]
