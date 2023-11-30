import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { ApiService } from './api.service';
import { ProductListComponent } from './product-list/product-list.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';


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
    ProductListComponent
<<<<<<< HEAD
=======
=======
    LoginComponent,
    CartComponent,
    BannerComponent,
    CartComponent,
    ProductComponent
>>>>>>> 0c0bfb4 (app.module.ts file conflicts)
>>>>>>> da5b893 (app.module.ts and banner.html conflicts)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
