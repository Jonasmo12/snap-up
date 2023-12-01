import { Component } from '@angular/core';
import { CategoryService } from '../categories.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  products: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router // Inject Router
  ) {}

  handleCategoryClick(categoryName: string): void {
    this.categoryService.fetchProductsByCategory(categoryName.toLowerCase())
      .then(data => {
        this.products = data;
        
        this.router.navigate(['/products', categoryName.toLowerCase()]);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  }
}