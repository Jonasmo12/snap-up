import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product, i: number ) {
    if (this.itemInTheCart(product)) {
      product.quantity ++;
      this.saveCart()
    } else {
      this.cartItems.push(product);
      this.saveCart()
    }
  }

  getItems(): Product[] {
    console.log('cart quantity: ', this.cartItems.length)
    return this.cartItems;
  }

  cartQuantity() : number {
    let sum = 0;
    this.cartItems.forEach(it => { sum += it.quantity})
    return sum
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
    return this.cartItems.find(each => each.id === item.id === true)
  }

  clearCart(items: any) {
    this.cartItems = [];
    localStorage.removeItem("cart_products")
  }

  constructor() { }
}
