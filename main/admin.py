from django.contrib import admin
from .models import *


@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Castle)
class CastleAdmin(admin.ModelAdmin):
    pass


class ArmyAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_owners', 'speed', 'damage', 'energy', 'current_units')
    list_filter = ('person',)
    search_fields = ('name', 'person__name')


admin.site.register(Army, ArmyAdmin)


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


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    pass


@admin.register(PlayerTask)
class PlayerTaskAdmin(admin.ModelAdmin):
    pass
