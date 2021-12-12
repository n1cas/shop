import { Product } from './../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor() { }

  @Input()
  product!: Product;

  onAddToCart(productName: string): void {
    console.log(`product added to card ${productName}`);
  }
}
