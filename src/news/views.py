# coding:utf-8
from rest_framework import generics
from news.serializers import NewsSerializer,NewsCategorySerializer
from rest_framework.response import Response
from news.models import News,NewsCategory
from django.contrib.auth.models import User

class NewsList(generics.ListCreateAPIView):
    queryset = News.objects.all().order_by('release_time')
    serializer_class = NewsSerializer

    def perform_create(self,serializer):
        result = serializer.save(
            created_user=User.objects.get(id='1'),
            news_category=NewsCategory.objects.get(id='1')
        )


class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all().order_by('release_time')
    serializer_class = NewsSerializer


class NewsCategoryList(generics.ListCreateAPIView):
    queryset = NewsCategory.objects.all()
    serializer_class = NewsCategorySerializer

class NewsCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NewsCategory.objects.all()
    serializer_class = NewsCategorySerializer
