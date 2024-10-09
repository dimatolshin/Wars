from django.urls import path, include
from .views import *


app_name = "main"

urlpatterns = [
    path('open/<int:tg_id>/', OpenBoxView.as_view(), name='open_box'),
]
