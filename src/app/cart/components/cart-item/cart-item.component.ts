import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product/model/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  constructor() { }

  @Input()
  cartEtries!: Product;

}
