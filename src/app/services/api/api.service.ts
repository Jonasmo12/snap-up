import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private products: Product[] = [];

  private productsUrl = 'https://fakestoreapi.com/products';

  

  constructor(private http: HttpClient) { }

  

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => {return products.map(product => ({...product, quantity: 1}))})
    
    )
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

  getWomen(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + `/category/women's%20clothing`)
  }
}
