import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public cartItems: Product[] = [];

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
    console.log("new products: ", this.products$)
  }

  addToCart(product: Product, i: any) {
    this.cartService.addToCart(product, i);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
    // if (this.cartService.itemInTheCart(product)) {
    //   console.log("Incrementing: " + product + " quantity");
    //   this.cartService.getItems().

    // } else {
    //   console.log("adding product: " + product + " to cart");
    //   this.cartService.addToCart(product)
    // }
  }
}
