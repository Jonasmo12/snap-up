import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { CartService } from '../cart.service';

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

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }
}
