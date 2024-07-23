from django.contrib import admin
from .models import *


@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Castle)
class CastleAdmin(admin.ModelAdmin):
    pass


@admin.register(Army)
class ArmyAdmin(admin.ModelAdmin):
    pass


@admin.register(Picture)
class PictureAdmin(admin.ModelAdmin):
    pass


@admin.register(Statistics_Army)
class Statistics_Army_Admin(admin.ModelAdmin):
    pass


@admin.register(FriendShip)
class FriendShipAdmin(admin.ModelAdmin):
    pass
