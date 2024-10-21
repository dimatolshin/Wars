from django.urls import path, include
from .views import *


app_name = "main"

urlpatterns = [
    path('open/', OpenBoxView.as_view(), name='open_box'),
]
