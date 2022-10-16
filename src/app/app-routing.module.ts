import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './users/cart/cart.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { HeaderComponent } from './users/header/header.component';
import { HomeComponent } from './users/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { ProductViewComponent } from './users/product-view/product-view.component';

import { ProductsComponent } from './users/products/products.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},{path:'products',component:ProductsComponent},{path:'profile',component:ProfileComponent},
{path:'changePassword',component:ChangePasswordComponent},{path:'cart',component:CartComponent},{path:'header',component:HeaderComponent},
{path:'productview',component:ProductViewComponent},
{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
