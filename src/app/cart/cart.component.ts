import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  getCartTotal() {
    return this.items.reduce(
      (sum, x) => ({
        quantity: 1,
        price: sum.price + x.quantity * x.price
      }),
      { quantity: 1, price: 0 }
    ).price
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item)
  }

  clearCart(items: any) {
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()]
  }

  addToCart(item: any) {
    if (!this.cartService.itemInTheCart(item)) {
      item.quantity = 1;
      this.cartService.clearCart(item);
      this.items = [...this.cartService.getItems()];
    }
  }

  // removeItem(item: any[]) {
  //   this.cartService.removeItem(item);
  // }

  ngOnInit() {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

  // same() {
  //   for(let i = 0; i < this.cartService.getItems.length; i++) {
  //     console.log(i++)
  //   }
  // }

  checkout() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/'])
    }
  }
}
