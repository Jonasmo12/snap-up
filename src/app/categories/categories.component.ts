import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  products: any={};

  constructor(
 
    private router: Router // Inject Router
  ) {}

  ngOnInit()
  {
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data => {
              this.products = data;
              console.log(this.products)
            })
            

   
    fetch('https://fakestoreapi.com/products/category/men')
            .then(res=>res.json())
            .then(data => {
              this.products = data;
              console.log(this.products)
            })
            

            fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(data => {
              this.products = data;
              console.log(this.products)
            })
           

            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
              this.products = data;
              console.log(this.products)
            })
          
  }
  



}