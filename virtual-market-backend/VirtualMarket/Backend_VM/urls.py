'''
Created on 4 jun. 2020

@author: Ruben Adrian
'''

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^c_user_category$', views.C_User_Category_List.as_view()),
    url(r'^c_user_category/(?P<pk>[0-9]+)$', views.C_User_Category_Detail.as_view()),
    url(r'^c_user$', views.C_User_List.as_view()),
    url(r'^c_user/(?P<pk>[0-9]+)$', views.C_User_Detail.as_view()),
    url(r'^product_category$', views.Product_Category_List.as_view()),
    url(r'^product_category/(?P<pk>[0-9]+)$', views.Product_Category_Detail.as_view()),
    url(r'^product$', views.Product_List.as_view()),
    url(r'^product/(?P<pk>[0-9]+)$', views.Product_Detail.as_view()),
    url(r'^order$', views.Order_List.as_view()),
    url(r'^order/(?P<pk>[0-9]+)$', views.Order_Detail.as_view()),
]