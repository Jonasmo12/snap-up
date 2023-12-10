import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/product/product.component';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'categories/', component: CategoriesComponent}
  // {path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
