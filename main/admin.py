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


@admin.register(ReferralSystem)
class ReferralSystemAdmin(admin.ModelAdmin):
    pass


@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    pass


@admin.register(PassiveEarning)
class PassiveEarningAdmin(admin.ModelAdmin):
    pass
