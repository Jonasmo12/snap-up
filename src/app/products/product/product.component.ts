import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api/api.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  apiService: ApiService = inject(ApiService);
  product: any;


  constructor() {
    const productID = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.apiService.getProductById(productID).subscribe(data => this.product = data);
  }


  ngOnInit(): void {
    //this.loadProduct();
  }

  ngOnDestroy(): void {
     
  }

  loadProduct() {
    // let productID = Number(this.route.snapshot.paramMap.get('id'))
    // console.log(productID)
    //this.product = this.apiService.getProduct(productID)
    //.subscribe(data => this.product = data)
  }


}

