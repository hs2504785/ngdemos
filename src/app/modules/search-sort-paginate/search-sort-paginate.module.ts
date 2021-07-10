import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSortPaginateRoutingModule } from './search-sort-paginate-routing.module';
import { SearchSortPaginateComponent } from './search-sort-paginate.component';


@NgModule({
  declarations: [
    SearchSortPaginateComponent
  ],
  imports: [
    CommonModule,
    SearchSortPaginateRoutingModule
  ]
})
export class SearchSortPaginateModule { }
