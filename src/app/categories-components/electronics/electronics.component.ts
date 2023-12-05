import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {

  public electronics$!: Observable<Product[]>;

  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.electronics$ = this.apiService.getElectronics();
  }

  addToCart(product: Product, i: number) {
    this.cartService.addToCart(product, i);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
  }
}
