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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { FooterComponent } from './footer/footer.component';
import { FashionComponent } from './fashion/fashion.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MensClothesComponent } from './mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './womens-clothes/womens-clothes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    LoginComponent,
    
    BannerComponent,
    CartComponent,
    ProductComponent,
    ProductListComponent,
    FeaturedBrandsComponent,
    NewArrivalsComponent,
    FooterComponent,
    FashionComponent,
    JeweleryComponent,
    ElectronicsComponent,
    MensClothesComponent,
    WomensClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
