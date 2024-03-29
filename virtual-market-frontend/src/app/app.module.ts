import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

/* angular material */
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SellerMainComponent } from './components/seller-main/seller-main.component';
import { BuyerMainComponent } from './components/buyer-main/buyer-main.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { CarComponent } from './components/car/car.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegistryComponent } from './components/registry/registry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellerMainComponent,
    BuyerMainComponent,
    HomeComponent,
    ProductComponent,
    CarComponent,
    CreateProductComponent,
    PaymentComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }

