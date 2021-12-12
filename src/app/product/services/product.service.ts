import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Category, Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products = [
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
    {
      name: 'meizu',
      description: 'not nice',
      price: 100,
      category: Category.phone,
      isAvailable: true,
    },
    {
      name: 'Dell',
      description: 'nice',
      price: 900,
      category: Category.laptop,
      isAvailable: true,
    },
    {
      name: 'Hp',
      description: 'nice',
      price: 700,
      category: Category.laptop,
      isAvailable: true,
    },
    {
      name: 'Samsung',
      description: 'nice',
      price: 200,
      category: Category.phone,
      isAvailable: true,
    },
  ];

  getProduct(): Observable<Product[]> {
    return of(this.products);
  }
}
