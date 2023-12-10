import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable, map, tap } from 'rxjs';
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
  categorie$!: Observable<any[]>;

  clickeCategoryProducts$!: Observable<Product[]>;

  selectedCategory?: CategoryNavComponent

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
    this.categorie$ = this.apiService.getCategories();
  }

  constructor(private apiService: ApiService, private cartService: CartService) { }


  isSelected(category: any): void {
    this.selectedCategory = category;
    console.log('selected Category: ', category)
    this.clickeCategoryProducts$ = this.apiService.getCategory(category).pipe(
      //map(products => {return products.map(product => ({...product, quantity: 1}))}),
      tap(data => console.log('category products: ', data))
    )
  }
}
