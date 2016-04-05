from rest_framework import viewsets
from django.contrib.auth.models import User
from users.serializers import UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("data_joined")
    serializer_class = UserSerializer
