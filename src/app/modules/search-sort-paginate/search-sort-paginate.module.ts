import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSortPaginateRoutingModule } from './search-sort-paginate-routing.module';
import { SearchSortPaginateComponent } from './search-sort-paginate.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    SearchSortPaginateComponent,
    FrontendComponent,
    BackendComponent,
    PaginatePipe,
    SearchPipe,
    SortPipe,
    ProductsComponent,
  ],
  imports: [CommonModule, SearchSortPaginateRoutingModule],
})
export class SearchSortPaginateModule {}
