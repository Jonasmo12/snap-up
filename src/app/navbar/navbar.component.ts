import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartitemsQuantity$!: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.loadCart()
    this.cartitemsQuantity$ = this.cartService.cartQuantity();
    //console.log("Obs says: ", this.cartService.getItemIntheCart$.length)
  }
}
