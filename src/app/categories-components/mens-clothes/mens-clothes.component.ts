import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-mens-clothes',
  templateUrl: './mens-clothes.component.html',
  styleUrls: ['./mens-clothes.component.css']
})
export class MensClothesComponent implements OnInit {


  public men$!: Observable<Product[]>;

  constructor(private apiService: ApiService, private cartService:CartService) {}


  ngOnInit(): void {
      this.men$ = this.apiService.getMen();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
  }
}
