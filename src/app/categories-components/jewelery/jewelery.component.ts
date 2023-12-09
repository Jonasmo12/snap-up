import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {

  public jewelery$!: Observable<Product[]>;

  constructor(private apiService: ApiService, private cartService: CartService) {}


  ngOnInit(): void {
      this.jewelery$ = this.apiService.getJewelery();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
  }

}
