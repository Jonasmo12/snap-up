import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Product } from './Product';
=======
>>>>>>> 6e66893 (merge login form with existing main)

@Injectable({
  providedIn: 'root'
})
export class CartService {

<<<<<<< HEAD
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
=======
  constructor() { }
>>>>>>> 6e66893 (merge login form with existing main)
}
