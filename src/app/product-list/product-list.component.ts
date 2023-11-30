import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  page = 4;
  public products$!: Observable<Product[]>;

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
      this.products$ = this.apiService.getProducts();
  }
}
