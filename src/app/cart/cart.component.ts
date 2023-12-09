import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService, private router: Router) { }

  items = this.cartService.cartItems;

  getCartTotal = this.cartService.cartTotal

  removeFromCart(product: Product) {
    this.cartService.removeItem(product)
    confirm(`Are you sure you want to remove ${product.title}`)
    //this.cartService.loadCart()
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
