import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject, Observable, Subject, map, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  cartItemsSubject$ = new BehaviorSubject(this.cartItems).asObservable()

  

  addToCart(product: Product, i: number ) {
    // this.cartItems.push(product);
    // this.saveCart()
    if (this.itemInTheCart(product)) {
      product.quantity ++;
      this.saveCart()
    } else {
      this.cartItems.push(product);
      this.saveCart()
    }
  }

  getCartItem$ = this.cartItemsSubject$.pipe(
    tap(items => console.log('im logging observables from cart: ', items))
  )

  getItems(): Product[] {
    console.log('cart quantity: ', this.cartItems.length)
    return this.cartItems;
  }

  cartQuantity() : number {
    //return this.cartItems.length
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
    // return this.items.findIndex(o => o.id === item.id > -1);
    return this.cartItems.find(each => each.id === item.id === true)
  }

  clearCart(items: any) {
    this.cartItems = [];
    localStorage.removeItem("cart_products")
  }

  constructor() { }
}
