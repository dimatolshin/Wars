from rest_framework import serializers

from main.models import Person


class CastleSerializer(serializers.Serializer):
    now_hp = serializers.IntegerField()
    start_hp = serializers.IntegerField()


class PersSeralizer(serializers.Serializer):
    lvl = serializers.IntegerField()
    money = serializers.IntegerField()
    now_energy = serializers.IntegerField()
    start_energy = serializers.IntegerField()
    recharge_energy = serializers.IntegerField()
    units_produced = serializers.IntegerField()
    upgrades_made = serializers.IntegerField()
    castles_destroyed = serializers.IntegerField()
    money_spent = serializers.IntegerField()
    friends_invited = serializers.IntegerField()
    castle = CastleSerializer()




class MyWarriorSerializer(serializers.Serializer):
    id_warrior = serializers.IntegerField()
    name = serializers.CharField()
    speed = serializers.FloatField()
    damage = serializers.IntegerField()
    lvl_speed = serializers.IntegerField()
    price_speed = serializers.IntegerField()
    lvl_damage = serializers.IntegerField()
    price_damage = serializers.IntegerField()
    cards = serializers.IntegerField()
    max_cards = serializers.IntegerField()
    evolve_lvl = serializers.IntegerField()
    image_url = serializers.URLField()
    can_evolve = serializers.BooleanField()

class MyArmySerializer(serializers.Serializer):
    money=serializers.IntegerField()
    my_army = MyWarriorSerializer(many=True)






class FriendsSerializer(serializers.Serializer):
    referral_system_id =serializers.IntegerField(source='id')
    flag = serializers.BooleanField(source='new_person_bonus')
    name=serializers.CharField(source='new_person.name')
    lvl = serializers.IntegerField(source='new_person.lvl')
    person_id = serializers.IntegerField(source='new_person.id')


class FriendsReferralSerializer(FriendsSerializer):
    flag = serializers.BooleanField(source='referral_bonus')
    name = serializers.CharField(source='referral.name')
    lvl = serializers.IntegerField(source='referral.lvl')
    person_id = serializers.IntegerField(source='referral.id')


