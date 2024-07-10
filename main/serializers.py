from rest_framework import serializers

from .models import *


class PersonSerializer(serializers.ModelSerializer):
    army = serializers.PrimaryKeyRelatedField(many=True, queryset=Army.objects.all(), default=[])

    class Meta:
        model = Person
        fields = '__all__'


class CastleSerializer(serializers.ModelSerializer):
    person = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Castle
        fields = '__all__'


class ArmySerializer(serializers.ModelSerializer):
    class Meta:
        model = Army
        fields = '__all__'
