import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product ) {
    this.cartItems.push(product);
  }

  getItems(): Product[] {
    return this.cartItems;
  }

  loadCart() : void {
    this.cartItems =JSON.parse(localStorage.getItem("cart_products") || "[]")
  }
 
  saveCart() : void {
    localStorage.setItem('cart_products', JSON.stringify(this.cartItems));
  }

  removeItem(item: any) {
    let index = this.cartItems.findIndex(o => o.id === item.id)
    if (index > -1 ) {
      this.cartItems.splice(index, 1);
      this.saveCart()
    }
  }

  itemInTheCart(item: Product): any {
    // return this.items.findIndex(o => o.id === item.id > -1);
    return this.cartItems.find(each => each.id === item.id === true)
  }

  clearCart(items: any) {
    this.cartItems = [];
    localStorage.removeItem("cart_products")
  }
}
