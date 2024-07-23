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
    path('upgrade_army_bring_money/', Upgrade_army_bring_money.as_view(), name='upgrade_army_bring_money'),
    path('upgrade_army_speed/', Upgrade_army_speed.as_view(), name='upgrade_army_speed'),
    path('media/media/<str:name>/', Url_Picture.as_view(), name='url_picture'),
    path('takin_army/<int:tg_id>/', Takin_Army.as_view(), name='Takin_Army'),
    path('add_friend_and_bonus/', AddBonus.as_view(), name='AddBonus'),
    path('generate_link/<int:tg_id>/', GenerateRefLinkView.as_view(), name='generate_link'),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
