"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.views.generic import RedirectView
from django.urls import include, path

from drf_spectacular.views import SpectacularRedocView, SpectacularSwaggerView, SpectacularAPIView

from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from user import views as user_views
from post import views as post_views
from utils import views as utils_views

from user.views import UserRouter

router = routers.DefaultRouter()


router.register(r'users', user_views.UserViewSet)
router.register(r'posts', post_views.PostViewSet)
router.register(r'comments', post_views.CommentViewSet)

urlpatterns = [
    path('api/', include(UserRouter.urls)),
    path('', RedirectView.as_view(url='/admin/', permanent=True)),
    path('admin/', admin.site.urls),

    # API
    path("api/auth/login/", user_views.UserLogin.as_view()),
    path("api/auth/refresh/", TokenRefreshView.as_view()),
    path("api/auth/logout/", utils_views.LogoutView.as_view()),

    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    path('api/', include(router.urls)),
]
