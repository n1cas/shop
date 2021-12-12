import { Product } from './../../../product/model/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  entries!:Product[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
   this.entries = this.cartService.getCartEntries();
  }
  
  courseTrackByName(index: number, product: Product): string {
    return product.name;
  }
}
