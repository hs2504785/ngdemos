import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'],
})
export class BackendComponent implements OnInit {
  products = [];
  filter = {
    s: '',
    sort: '',
    page: 1,
  };
  lastPage = 0;

  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.load(this.filter);
  }

  load(filter: Filter): void {
    this.filter = filter;

    this.productService
      .getPaginatedProducts(filter)
      .subscribe((response: any) => {
        this.products =
          filter.page === 1
            ? response.data
            : [...this.products, ...response.data];
        this.lastPage = response.last_page;

        this.cd.detectChanges();
      });
    // this.http.get('http://localhost:8000/api/products/backend', {
    //   params
    // }).subscribe(
    //   (response: any) => {
    //     this.products = filter.page === 1 ? response.data : [...this.products, ...response.data];
    //     this.lastPage = response.last_page;
    //   }
    // );
  }

  setFilters(filter: Filter): void {
    this.load(filter);
  }
}
