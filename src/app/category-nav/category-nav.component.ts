import { Component, Inject, inject } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent {
  apiService: ApiService = inject(ApiService);
  categories!: any[]

  constructor() {}

}
