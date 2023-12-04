import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  page = 4;
  public products$!: Observable<Product[]>;

  constructor(private apiService: ApiService, private cartService:CartService) {}


  ngOnInit(): void {
      this.products$ = this.apiService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
  }
}
