import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  public products$!: Observable<Product[]>;

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
      this.products$ = this.apiService.getProducts();
  }


}

