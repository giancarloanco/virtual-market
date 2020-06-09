'''
Created on 4 jun. 2020

@author: Ruben Adrian
'''

from rest_framework import serializers

from Backend_VM.models import C_User_Category, C_User, Product_Category, Product, Order

class C_User_Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = C_User_Category
        fields = ('id', 'name','description')
        
class C_User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = C_User
        fields = ('id', 'first_name','last_name', 'phone','email','password','category')
        
class Product_Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Category
        fields = ('id', 'name','description')
        
class Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name','type','unit','price','total','category')
        
class Order_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'type','description','c_user')