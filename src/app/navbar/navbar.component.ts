import { Component, OnInit, computed } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartQuantityCount = computed(() => this.cartService.cartItems().reduce(
    (acc, item) => acc + item.quantity, 0))

  ngOnInit(): void {
    this.cartService.cartItems
  }

}
