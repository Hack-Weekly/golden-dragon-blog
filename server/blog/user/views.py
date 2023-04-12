from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponseRedirect

from rest_framework import viewsets
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer, LoginSerializer

from rest_framework import routers

from user.forms import MyUserCreationForm, UserResetPasswordForm
from rest_framework_simplejwt.views import TokenObtainPairView


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        new_user = super().create(request, *args, **kwargs)
        new_user.set_password(request.data['password'])
        new_user.save()
        return new_user

    def perform_update(self, serializer):
        if self.request.user != serializer.instance:
            raise PermissionDenied('You can only update your own account.')
        super().perform_update(serializer)


class UserLogin(TokenObtainPairView):
    serializer_class = LoginSerializer


def register(request):
    if request.method == 'POST':
        form = MyUserCreationForm(request.POST)

        if form.is_valid():
            newuser = form.save()

            # Sign user in automatically
            authuser = authenticate(
                username=newuser.username,
                password=form.cleaned_data["password"]
            )
            if authuser is not None:
                if authuser.is_active:
                    login(request, authuser)
                    return HttpResponseRedirect('/')

    else:
        form = MyUserCreationForm()

    return JsonResponse({success: True})


UserRouter = routers.DefaultRouter()

UserRouter.register(r'users', UserViewSet, basename="Users")
