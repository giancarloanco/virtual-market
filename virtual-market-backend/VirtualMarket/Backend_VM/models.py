'''
Created on 4 jun. 2020

@author: Ruben Adrian
'''

from django.db import models
from django.db.models.fields import DateField

class C_User_Category(models.Model):
    name = models.CharField(max_length = 20)
    description = models.CharField(max_length = 100)
    
class C_User(models.Model):
    first_name = models.CharField(max_length = 20)
    last_name = models.CharField(max_length = 20)
    email = models.CharField(max_length = 50)
    phone = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)
    category = models.ForeignKey(C_User_Category, on_delete = models.CASCADE)
    
class Product_Category(models.Model):
    name = models.CharField(max_length = 20)
    description = models.CharField(max_length = 100)
    
class Product(models.Model):
    name = models.CharField(max_length = 20)
    type = models.CharField(max_length = 20)
    unit = models.CharField(max_length = 20)
    price = models.DecimalField(max_digits = 12, decimal_places = 2)
    total = models.IntegerField()
    category = models.ForeignKey(Product_Category, on_delete = models.CASCADE)
    
class Order(models.Model):
    type = models.BooleanField()
    date = DateField(auto_now_add = True)
    description = models.TextField()
    c_user = models.ForeignKey(C_User, null = True, on_delete = models.SET_NULL)
