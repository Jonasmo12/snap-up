import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products$!: Observable<Product[]>;

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
      this.products$ = this.apiService.getProducts();
  }
}
