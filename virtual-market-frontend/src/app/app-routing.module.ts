import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SellerMainComponent } from './components/seller-main/seller-main.component';
import { BuyerMainComponent } from './components/buyer-main/buyer-main.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component'
import { CarComponent } from './components/car/car.component'
import { CreateProductComponent } from './components/create-product/create-product.component'
import { PaymentComponent } from './components/payment/payment.component'


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'seller',
    component: SellerMainComponent
  },
  {
    path: 'buyer',
    component: BuyerMainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CarComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
