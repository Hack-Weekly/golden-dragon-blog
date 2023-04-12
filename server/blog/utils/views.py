from django.shortcuts import render


# Create your views here.
from rest_framework import permissions, status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .serializers import RefreshTokenSerializer


class LogoutView(GenericAPIView):
    serializer_class = RefreshTokenSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, *args):
        data = self.get_serializer(data=request.data)
        data.is_valid(raise_exception=True)
        data.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
