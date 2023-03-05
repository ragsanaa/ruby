from rest_framework import serializers
from .models import CategoryModel

# Serializer class'es formats dict data to json data
"""
When we create serializer with class ModelSerilizer, we must create variables model and fields.
Value for model variable is name of model class from file models.py.
The Value for fields is fields in table witch we want to use.
"""
# Serializer class for CategoryModel
class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'
        blank = True
