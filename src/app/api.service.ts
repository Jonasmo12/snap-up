import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productsUrl = 'https://fakestoreapi.com/products';


  constructor(private http: HttpClient) { }

  

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getJewelery(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/jewelery')
  }

  getElectronics(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/electronics')
  }

  getMen(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + `/category/men's%20clothing`)
  }
}
