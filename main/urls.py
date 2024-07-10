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

app_name = "task"

urlpatterns = [
    path('main_info/', MainPage.as_view(), name='main_info'),
    path('tap-tap/', Tap.as_view(), name='tap-tap'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
