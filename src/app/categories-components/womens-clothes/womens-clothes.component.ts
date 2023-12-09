import { Component, OnInit } from '@angular/core';
import { ApiService  } from '../../services/api/api.service';
import { CartService } from '../../services/cart/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
@Component({
  selector: 'app-womens-clothes',
  templateUrl: './womens-clothes.component.html',
  styleUrls: ['./womens-clothes.component.css']
})
export class WomensClothesComponent implements OnInit {

  public women$!: Observable<Product[]>;

  constructor(
    private apiService: ApiService, 
    private cartService: CartService
    ) {}


  ngOnInit(): void {
      this.women$ = this.apiService.getWomen();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Item added to Cart');
    console.log('Product added to cart:', product);
  }
}
