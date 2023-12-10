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

  getProductById(productID: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + productID)
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl + '/categories')
  }

  getJewelery(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/jewelery').pipe(
      map(products => {return products.map(product => ({...product, quantity: 1}))})
    )
  }

  getElectronics(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/electronics').pipe(
      map(products => {return products.map(product => ({...product, quantity: 1}))}))
  }

  getMen(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/men').pipe(
      map(products => {return products.map(product => ({...product, quantity: 1}))}))
  }

  getWomen(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + '/category/women').pipe(
      map(products => {return products.map(product => ({...product, quantity: 1}))}))
  }
}
