'''
Created on 4 jun. 2020

@author: Ruben Adrian
'''

from django.contrib import admin

from Backend_VM.models import C_User_Category, C_User, Product_Category, Product, Order

admin.site.register(C_User_Category)

admin.site.register(C_User)

admin.site.register(Product_Category)

admin.site.register(Product)

admin.site.register(Order)
