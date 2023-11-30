import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path: '', component: BannerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product', component: ProductComponent},
  // {path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
