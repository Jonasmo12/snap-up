import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api/api.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NewArrivalsComponent } from './categories-components/new-arrivals/new-arrivals.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { JeweleryComponent } from './categories-components/jewelery/jewelery.component';
import { ElectronicsComponent } from './categories-components/electronics/electronics.component';
import { MensClothesComponent } from './categories-components/mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './categories-components/womens-clothes/womens-clothes.component';
import { CartService } from './services/cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    CartComponent,
    ProductComponent,
    CategoriesComponent,
    ProductListComponent,
    LoginComponent,
    CartComponent,
    BannerComponent,
    CartComponent,
    ProductComponent,
    JeweleryComponent,
    ElectronicsComponent,
    MensClothesComponent,
    WomensClothesComponent,
    FooterComponent,
    NewArrivalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
