import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProduct();
  }

}
