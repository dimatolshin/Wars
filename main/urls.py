from django.urls import path, include
from .views import *
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version='v1',
        description="API documentation for my project",
        # ...
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

app_name = "main"

urlpatterns = [
    path('main_info/<int:tg_id>/<str:name>/', MainPage.as_view(), name='main_info'),
    path('tap-tap/', Tap.as_view(), name='tap-tap'),
    path('upgrade_army_bring_money/', Upgrade_army_damage.as_view(), name='upgrade_army_bring_money'),
    path('upgrade_army_speed/', Upgrade_army_speed.as_view(), name='upgrade_army_speed'),
    path('media/<str:name>/', Url_Picture.as_view(), name='url_picture'),
    path('takin_army/<int:tg_id>/', Takin_Army.as_view(), name='Takin_Army'),
    path('completeReferral/<int:new_id>/<int:referral_id>/', CompleteReferralSystem.as_view(),
         name='Complete_referral'),
    path('all_friends/<int:tg_id>/', AllFriends.as_view(), name='all_friends'),
    path('taking_bonus/', TakinBonus.as_view(), name='takin_bonus'),
    path('evolve_cards/', EvolveCards.as_view(), name='evolve_cards'),
    path('info_bonus/<int:tg_id>/', InfoBonus.as_view(), name='info_bonus'),
    path('all_show_cards/', ShowAllCards.as_view(), name='all_cards'),
    path('evolve_cards/', EvolveCards.as_view(), name='evo_cards'),
    path('info_bonus/<int:tg_id>/', InfoBonus.as_view(), name='info_bonus'),
    path('check_and_give_daly_bonus/', Check_And_Give_Daly_Bonus.as_view(), name='check_and_give_daly_bonus'),
    path('get_bonus_per_common_enter/', Get_Bonus_per_Сommon_Enter.as_view(), name='get_bonus_per_common_enter'),

    path('task/<int:tg_id>/<str:dop_name>/', TaskPlayerDetailView.as_view(), name='task-player-detail'),
    path('task/<int:tg_id>/<str:dop_name>/start/', StartTaskView.as_view(), name='task-player-start'),


    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
