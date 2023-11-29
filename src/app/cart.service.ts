import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.products.push(product)
  }

  getProductsInTheCart() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
