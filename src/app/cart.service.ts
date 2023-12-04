import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //private product: Product;

  constructor() { }

  private items: any[] = [];

  addToCart(product: Product ) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  loadCart() : void {
    this.items =JSON.parse(localStorage.getItem("cart_products") || "[]")
  }
 
  saveCart() : void {
    localStorage.setItem('cart_products', JSON.stringify(this.items));
  }

  removeItem(item: any) {
    let index = this.items.findIndex(o => o.id === item.id)
    if (index > -1 ) {
      this.items.splice(index, 1);
      this.saveCart()
    }
  }

  itemInTheCart(item: any): any {
    return this.items.findIndex(o => o.id === item.id > -1);
  }

  clearCart(items: any) {
    this.items = [];
    localStorage.removeItem("cart_products")
  }
}
