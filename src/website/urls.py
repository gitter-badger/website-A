#-*- coding=utf-8 -*-
"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from users import views as users_views
from client import views as client_views
# from news import views as news_views

api='api/v1/'

urlpatterns = [
    url(r'^$',client_views.index,name="index"),
    url(r'^index.*',client_views.index),
    url(r'^in$',client_views.signin,name='sign-in'),
    url(r'dashboard$',client_views.dashboard,name='dashboard'),


    url(r'^api/v1/users/$', users_views.UserList.as_view()),
    url(r'^api/v1/users/(?P<pk>[0-9]+)/$', users_views.UserDetail.as_view()),
]
