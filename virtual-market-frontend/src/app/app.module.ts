import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SellerMainComponent } from './components/seller-main/seller-main.component';
import { BuyerMainComponent } from './components/buyer-main/buyer-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SellerMainComponent,
    BuyerMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
