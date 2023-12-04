import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MensClothesComponent } from './mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './womens-clothes/womens-clothes.component';

const routes: Routes = [
  {path: '', component: BannerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product', component: ProductComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'products/:category', component: ProductComponent },
  {path:'jewelery', component:JeweleryComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path: 'men',component:MensClothesComponent},
  {path: 'women',component: WomensClothesComponent}
  // {path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
