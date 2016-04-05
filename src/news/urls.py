from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from news import views

urlpatterns = [
    url(r'^api/news/$', views.NewsList.as_view()),
    url(r'^api/news/(?P<pk>[0-9]+)/$', views.NewsDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
