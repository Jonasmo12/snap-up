import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  constructor(private cartService: CartService) { }

  @Input() products$!: Product;

  // product!: Product;

  addToCart(product: Product) {
    try {

    this.cartService.addToCart(product);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
    } catch (err) {
      console.log(err)
    }

  }

}
