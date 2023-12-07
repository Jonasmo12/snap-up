import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
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
    private router: Router,
  ) { }

  getCartTotal(): number {
    console.log("Items in the Cart: ", this.items)
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
    confirm(`Are you sure you want to remove ${item.title}`)
    this.cartService.loadCart()
  }

  clearCart(items: any) {
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()]
  }

  ngOnInit() {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }


  checkout() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/'])
    }
  }
}
