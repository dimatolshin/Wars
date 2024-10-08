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


class ReferralSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReferralSystem
        fields = '__all__'


class PictureSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Picture"""

    class Meta:
        model = Picture
        fields = ['id', 'name', 'image']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if not representation['image']:
            representation['image'] = 'Nano'  # Устанавливаем значение по умолчанию, если изображение отсутствует
        return representation


class TaskSerializer(serializers.ModelSerializer):
    """Сериализатор для модели Task"""
    picture = PictureSerializer(read_only=True)

    class Meta:
        model = Task
        fields = ['id', 'name', 'dop_name', 'task_type', 'condition_type', 'condition_value', 'reward_currency',
                  'chest', 'picture']


class PlayerTaskSerializer(serializers.ModelSerializer):
    """Сериализатор для модели PlayerTask"""
    task = TaskSerializer(read_only=True)

    class Meta:
        model = PlayerTask
        fields = ['task', 'id', 'start_time', 'completed']
