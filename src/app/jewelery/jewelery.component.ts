import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent {

  public jewelery$!: Observable<Product[]>;

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
      this.jewelery$ = this.apiService.getJewelery();
  }

}
