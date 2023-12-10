import { Component, Inject, inject } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent {
  apiService: ApiService = inject(ApiService);
  categorie$!: Observable<any[]>;

  constructor() {
    this.categorie$ = this.apiService.getCategories();
  }

}
