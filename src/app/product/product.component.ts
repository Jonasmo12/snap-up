import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  url = "";
  
  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
      
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("You have added product to cart!!");
  }

  getProduct() {
    return this.http.get(this.url)
  }
  

}

