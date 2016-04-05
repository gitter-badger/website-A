from rest_framework import generics
from django.contrib.auth.models import User
from users.serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all().order_by('date_join')
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().order_by('date_join')
    serializer_class = UserSerializer
