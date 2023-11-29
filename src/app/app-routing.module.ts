import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
