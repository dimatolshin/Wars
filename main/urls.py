from django.urls import path, include

from . import views
from .views import *
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt

app_name = "main"

urlpatterns = [
    path('main_info/<int:tg_id>/<str:name>/', csrf_exempt(views.main_info), name='main_info'),
    path('tap-tap/', csrf_exempt(views.tap_tap), name='tap-tap'),
    path('count_energy/<int:tg_id>/', csrf_exempt(views.count_energy), name='count_energy'),


    path('upgrade_army_bring_money/', csrf_exempt(views.upgrade_army_damage), name='upgrade_army_damage'),
    path('upgrade_army_speed/', csrf_exempt(views.upgrade_army_speed), name='upgrade_army_speed'),
    path('takin_army/<int:tg_id>/', csrf_exempt(views.takin_army), name='Takin_Army'),
    path('evolve_cards/',csrf_exempt(views.evolve_cards), name='evolve_cards'),

    path('completeReferral/<int:new_id>/<int:referral_id>/', csrf_exempt(views.complete_referral_system)),
    path('takin_referral_bonus/', csrf_exempt(views.takin_referral_bonus), name='takin_bonus'),
    path('all_friends/<int:tg_id>/', csrf_exempt(views.all_friends), name='all_friends'),
    path('generate_ref_link/<int:tg_id>/',csrf_exempt(views.generate_ref_link_view), name='Create link'),


    # path('check_and_give_daly_bonus/', Check_And_Give_Daly_Bonus.as_view(), name='check_and_give_daly_bonus'),
    # path('get_bonus_per_common_enter/', Get_Bonus_per_Сommon_Enter.as_view(), name='get_bonus_per_common_enter'),
    #
    # path('media/<str:name>/', Url_Picture.as_view(), name='url_picture'),

    # path('task/<int:tg_id>/<str:dop_name>/', TaskPlayerDetailView.as_view(), name='task-player-detail'),
    # path('task/<int:tg_id>/<str:dop_name>/start/', StartTaskView.as_view(), name='task-player-start'),

]
