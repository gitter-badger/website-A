from rest_framework import serializers
from news.models import News,NewsCategory

class NewsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = News
        fields = ('id','news_title')


class NewsCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NewsCategory
        fields = ('id','category_name')
