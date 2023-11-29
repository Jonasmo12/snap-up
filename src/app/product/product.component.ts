import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  products!: any[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("You have added product to cart!!");
  }

  // getProduct() {
  //   return this.http.get(this.url)
  // }
  

}

