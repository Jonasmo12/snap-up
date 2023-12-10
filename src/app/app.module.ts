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
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartService } from './services/cart/cart.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';


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
    FooterComponent,
    AddToCartComponent,
    CategoryNavComponent,
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
