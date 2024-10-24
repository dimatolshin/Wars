from rest_framework import serializers
from .models import *


class BoxSerializer(serializers.ModelSerializer):

    class Meta:
        model = Box
        fields = '__all__'

