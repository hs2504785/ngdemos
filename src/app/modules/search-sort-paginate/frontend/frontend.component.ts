import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
})
export class FrontendComponent implements OnInit {
  products$: Observable<Product[]> = this.productService.getProducts();
  filter = {
    s: '',
    sort: '',
    page: 1,
  };
  perPage = 9;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  lastPage(products: Product[]): number {
    return Math.ceil(products.length / this.perPage);
  }
}
