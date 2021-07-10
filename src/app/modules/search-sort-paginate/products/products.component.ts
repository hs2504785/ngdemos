import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product';
import {Filter} from '../models/filter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input('products') products: Product[] = [];
  @Input('filter') filter: Filter;
  @Input('lastPage') lastPage: number;

  @Output('setFilters') setFilters = new EventEmitter();

  search(s: string): void {
    this.setFilters.emit({
      ...this.filter,
      s,
      page: 1
    });
  }

  sort(sort: string): void {
    this.setFilters.emit({
      ...this.filter,
      sort,
      page: 1
    });
  }

  loadMore(): void {
    this.setFilters.emit({
      ...this.filter,
      page: this.filter.page + 1
    });
  }
}
