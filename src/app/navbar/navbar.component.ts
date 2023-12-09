import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartitemsQuantity!: number;


  ngOnInit(): void {
    this.cartService.loadCart()
    this.cartitemsQuantity = this.cartService.cartQuantity();
  }


  constructor(public cartService: CartService) { }
}
