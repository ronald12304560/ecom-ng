import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() {
   }

  
  create(product) {
    this.items.push(product);
  }

  getIList() {
    return this.items;
  }

  removeAll() {
    this.items = [];
    return this.items;
  }
}
