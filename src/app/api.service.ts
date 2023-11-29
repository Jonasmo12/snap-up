import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }


}
