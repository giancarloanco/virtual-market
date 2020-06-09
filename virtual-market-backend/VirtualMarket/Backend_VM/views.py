'''
Created on 4 jun. 2020

@author: Ruben Adrian
'''

from rest_framework import generics

from Backend_VM.models import C_User_Category, C_User, Product_Category, Product, Order

from Backend_VM.serializers import C_User_Category_Serializer, C_User_Serializer, Product_Category_Serializer, Product_Serializer, Order_Serializer

class C_User_Category_List(generics.ListCreateAPIView):
    queryset = C_User_Category.objects.all()
    serializer_class = C_User_Category_Serializer
    
class C_User_Category_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = C_User_Category.objects.all()
    serializer_class = C_User_Category_Serializer
    
class C_User_List(generics.ListCreateAPIView):
    queryset = C_User.objects.all()
    serializer_class = C_User_Serializer
    
class C_User_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = C_User.objects.all()
    serializer_class = C_User_Serializer
    
class Product_Category_List(generics.ListCreateAPIView):
    queryset = Product_Category.objects.all()
    serializer_class = Product_Category_Serializer
    
class Product_Category_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product_Category.objects.all()
    serializer_class = Product_Category_Serializer
    
class Product_List(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer
    
class Product_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer
    
class Order_List(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = Order_Serializer
    
class Order_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = Order_Serializer
    