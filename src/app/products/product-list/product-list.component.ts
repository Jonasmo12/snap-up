import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { AddToCartComponent } from 'src/app/add-to-cart/add-to-cart.component';
import { CategoryNavComponent } from 'src/app/category-nav/category-nav.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public cartItems: Product[] = [];

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
  }

  constructor(private apiService: ApiService, private cartService: CartService) { }
}
