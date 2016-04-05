#-*- coding:utf8 -*-
from django.shortcuts import render

#首页
def index(req):
    return render(req,'index.html')

# 进后台
def dashboard(req):
    return render(req,'dashboard.html')

# 登录界面
def signin(req):
    return render(req,'signin.html')
