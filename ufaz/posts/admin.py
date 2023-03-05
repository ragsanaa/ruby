from django.contrib import admin
from .models import ProviderPosts

# Register ProviderPosts from models.py
admin.site.register(ProviderPosts)
# Now we can read, change, write or delete data from this table
