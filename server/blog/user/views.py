from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        ret = super().create(request, *args, **kwargs)
        new_user = User.objects.get(id=ret.data['id'])
        new_user.set_password(request.data['password'])
        new_user.save()
        return ret

    def perform_update(self, serializer):
        if self.request.user != serializer.instance:
            raise PermissionDenied('You can only update your own account.')
        super().perform_update(serializer)





