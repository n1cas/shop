import { Injectable } from '@angular/core';
import { Category, Product } from 'src/app/product/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartEntries: Product[] =  [
    {
      name: 'Iphone',
      description: 'nice',
      price: 300,
      category: Category.phone,
      isAvailable: true,
    },
    {
      name: 'Ipad',
      description: 'nice',
      price: 500,
      category: Category.table,
      isAvailable: false,
    },  
  ];

  getCartEntries(): Product[] {
    return this.cartEntries;
  }
}
