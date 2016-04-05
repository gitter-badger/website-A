# -*- coding:utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

#
class News(models.Model):

    # 审查中
    RV = 'RV'
    # 发布中
    RL = 'RL'
    # 打回
    RJ = 'RJ'
    NEWS_STATUS = (
        (RV , 'REVIEW'),
        (RL , 'RELEASE'),
        (RJ , 'REJECT'),
    )

    news_title = models.CharField(max_length=200)
    news_content = models.TextField()
    # 新闻创建时间
    created_time = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=2,choices=NEWS_STATUS,default=RV)
    created_user = models.ForeignKey(User, on_delete=models.CASCADE)
    # 是否置顶
    is_ontop = models.BooleanField(default=False)
    # 帐号是否激活
    is_active = models.BooleanField(default=True)
    # 初始图片，这个放在页面上
    index_img = models.CharField(max_length=250,null=True,default=None)
    news_category = models.ForeignKey("NewsCategory", on_delete=models.CASCADE)
    # 新闻发布时间
    release_time = models.DateTimeField(default=None,null=True)

class NewsCategory(models.Model):
    category_name = models.CharField(max_length=50)
