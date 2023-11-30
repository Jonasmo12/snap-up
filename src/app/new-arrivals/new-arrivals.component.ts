import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  products:any={};

  constructor(private cartService: CartService) {}

  ngOnInit() {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => {
        this.products = data;
        console.log(this.products);
      })
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}
