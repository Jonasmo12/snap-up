import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  storeddata=JSON.parse(localStorage.getItem("products") || "[]")
  alldata:any;

  constructor(private cartService: CartService) {}

  

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log('cfbgb',this.storeddata);
    
   
   console.log('data',this.alldata);
  }

  removeItem(index: number) {
    
    this.cartService.removeItem(index);
  }
}
