from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import article


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        # fields = ['url', 'username', 'email', 'groups']


# User Groups which i don't use yet
"""
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
"""

# blog page
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = article
        fields = '__all__'