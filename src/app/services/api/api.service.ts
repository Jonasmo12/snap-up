import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => { return products.map(product => ({ ...product, quantity: 1 })) })
    )
  }

  getProductById(productID: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + productID)
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl + '/categories')
  }

  getCategory(categoryName: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/' + categoryName);
  }
}
