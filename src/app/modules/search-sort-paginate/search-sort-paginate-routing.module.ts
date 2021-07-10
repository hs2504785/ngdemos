import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSortPaginateComponent } from './search-sort-paginate.component';

const routes: Routes = [{ path: '', component: SearchSortPaginateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSortPaginateRoutingModule { }
