from rest_framework import serializers


class TapBody(serializers.Serializer):
    tg_id = serializers.IntegerField()
    money = serializers.IntegerField()
    energy = serializers.IntegerField()
    hp = serializers.IntegerField()


class СountEnergyBody(serializers.Serializer):
    tg_id = serializers.IntegerField()


class MainPageBody(СountEnergyBody):
    name = serializers.CharField()


class UpgradeWarriorBody(СountEnergyBody):
    id_warrior = serializers.IntegerField()


class ReferralBody(serializers.Serializer):
    new_id = serializers.IntegerField()
    referral_id = serializers.IntegerField()


class TakingReferralBody(СountEnergyBody):
    referral_system_id = serializers.IntegerField()
