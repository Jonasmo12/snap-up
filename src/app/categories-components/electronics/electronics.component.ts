import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {

  public electronics$!: Observable<Product[]>;

  constructor(private apiService: ApiService, private cartService: CartService) {}
productList:any[]=[];

  ngOnInit(): void {
      this.electronics$ = this.apiService.getElectronics();
  }
  addToCart(product: any, i: any) {
    this.cartService.addToCart(product, i);
    this.productList.push(product);
    localStorage.setItem('products', JSON.stringify(this.productList));
    console.log('Product added to cart:', product);
  }
}
