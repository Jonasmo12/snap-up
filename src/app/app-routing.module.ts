import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/product/product.component';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { JeweleryComponent } from './categories-components/jewelery/jewelery.component';
import { ElectronicsComponent } from './categories-components/electronics/electronics.component';
import { MensClothesComponent } from './categories-components/mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './categories-components/womens-clothes/womens-clothes.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'categories/', component: CategoriesComponent},
  { path: 'jewelery', component: JeweleryComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'men', component: MensClothesComponent },
  { path: 'women', component: WomensClothesComponent }
  // {path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
