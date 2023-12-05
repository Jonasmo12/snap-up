import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  products:any={};
  product2:any={};
  product3:any={};
  product4:any={};


  constructor(private cartService: CartService) {}

  ngOnInit() {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => {
        this.products = data;
        console.log(this.products);
      })


      fetch('https://fakestoreapi.com/products/2')
      .then(res => res.json())
      .then(data => {
        this.product2 = data;
        console.log(this.product2);
      })


      fetch('https://fakestoreapi.com/products/3')
      .then(res => res.json())
      .then(data => {
        this.product3 = data;
        console.log(this.product3);
      })


      fetch('https://fakestoreapi.com/products/4')
      .then(res => res.json())
      .then(data => {
        this.product4 = data;
        console.log(this.product4);
      })
  }

  addToCart(product: any, i: any) {
    this.cartService.addToCart(product, i);
    console.log('Product added to cart:', product);
  }
}
