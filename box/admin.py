from django.contrib import admin
from box.models import Box


@admin.register(Box)
class BoxAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'currency_min', 'currency_max', 'card_count_min', 'card_count_max', 'is_active']

