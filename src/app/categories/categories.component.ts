import { Component } from '@angular/core';
import { CategoryService } from '../categories.service'; 

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  products: any[] = [];

  constructor(private categoryService: CategoryService) {}

  handleCategoryClick(categoryName: string): void {
    this.categoryService.fetchProductsByCategory(categoryName.toLowerCase())
      .then(data => {
        this.products = data;
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  }
}
