import { Injectable, computed, signal } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<Product[]>([]);

  addToCart(product: Product): void {
    // check if item exists in the cart
    let isProductInTheCart: number = this.cartItems().findIndex(item => item.id === product.id);

    if (isProductInTheCart === -1) {
      this.cartItems.update(products => [...products, product])
      //this.cartItems.push(product);
      //this.saveCart()
    } else {

      this.cartItems.update(products =>
        [
          ...products.slice(0, isProductInTheCart),
          { ...products[isProductInTheCart], quantity: products[isProductInTheCart].quantity + 1 },
          ...products.slice(isProductInTheCart + 1)
        ])


      // product.quantity ++;
      //this.saveCart()
    }
  }

  // getItems(): Product[] {
  //   console.log('cart quantity: ', this.cartItems.length)
  //   return this.cartItems;
  // }

  // cartQuantity() : number {
  //   let sum = 0;
  //   this.cartItems().forEach(it => { sum += it.quantity})

  // }

  // getCartQuantityWithSignals = computed(() => this.cartItems())

  loadCart = computed(() => this.cartItems = JSON.parse(localStorage.getItem("cart_products") || "[]"));

  // loadCart() : void {
  //   this.cartItems =JSON.parse(localStorage.getItem("cart_products") || "[]")
  // }
  saveCart = computed(() => localStorage.setItem('cart_products', JSON.stringify(this.cartItems)));

  cartTotal = computed(() => this.cartItems().reduce(
    (sum: any, x: any) => ({
      quantity: 1,
      price: sum.price + x.quantity * x.price
    }),
    { quantity: 1, price: 0 }
  ).price)

  // saveCart() : void {
  //   localStorage.setItem('cart_products', JSON.stringify(this.cartItems));
  // }

  

  removeItem(product: Product): void {
    this.cartItems.update(
      products => products.filter(item => item.id !== product.id)
    );
    // let index = this.cartItems().findIndex(o => o.id === item.id)
    // if (index > -1) {
    //   this.cartItems().splice(index, 1);
    //   //this.saveCart()
    }
}

  // itemInTheCart(item: Product): boolean {
  //   return this.cartItems().find(each => each.id === item.id === true)
  // }

  //clearCart(cartItems: this.ca) {
    //this.cartItems([]) = [];
  //   localStorage.removeItem("cart_products")
  // }

