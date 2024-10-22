from django.urls import path, include
from .views import *


app_name = "box"

urlpatterns = [
    path('open/', OpenBoxView.as_view(), name='open_box'),
]
