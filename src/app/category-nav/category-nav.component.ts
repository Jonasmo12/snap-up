import { Component, Inject, Input, inject } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent {
  apiService: ApiService = inject(ApiService);
  
  // @Input() categorie$!: any;
 // @Input() selectedCategory!: any;

  
  

  constructor() {
    
  }
  
  
  

}
