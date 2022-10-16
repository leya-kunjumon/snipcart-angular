import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './users/home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataserviceComponent } from './users/dataservice/dataservice.component';
import { ProductsComponent } from './users/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ProfileComponent } from './users/profile/profile.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { CartComponent } from './users/cart/cart.component';
import { HeaderComponent } from './users/header/header.component';
import { ProductViewComponent } from './users/product-view/product-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DataserviceComponent,
    ProductsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    CartComponent,
    HeaderComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
