import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MockProductApiService } from './resources/mock-product-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/resources/auth.service';
import { User } from '../auth/resources/auth';
import { PriceFilter, Product } from './resources/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // pagination: Pagination;
  user: User;

  constructor(
    private productService: MockProductApiService,
    public router: Router,
    // private alertService: AlertService,
    // private spinner: NgxSpinnerService,
    private authService: AuthService, // private paginationService: PaginationService
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // this.loadProducts(
    //   this.paginationService.createUrl(
    //     '0',
    //     '999',
    //     '1',
    //     '9',
    //     environment.baseUrl + 'products?'
    //   )
    // );
    this.loadProducts();
  }

  loadProducts() {
    // this.spinner.show();
    const productsObserver = {
      next: response => {
        this.products = response;
        this.cd.detectChanges();
        // this.pagination = response.pagination;
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 1000);
      },
      error: err => {
        // console.error(err);
        // this.alertService.danger('Unable to load products');
        // this.spinner.hide();
      },
    };
    this.productService.getProducts().subscribe(productsObserver);
  }

  onPriceFilterChange(item: PriceFilter) {
    // this.loadProducts(
    //   this.paginationService.createUrl(
    //     item.min,
    //     item.max,
    //     '1',
    //     '25',
    //     environment.baseUrl + 'products?'
    //   )
    // );
  }

  onPaginationChange(url: string) {
    // this.loadProducts(url);
  }
}
