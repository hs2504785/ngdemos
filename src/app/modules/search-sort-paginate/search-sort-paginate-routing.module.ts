import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SearchSortPaginateComponent } from './search-sort-paginate.component';

const routes: Routes = [
  {
    path: '',
    component: SearchSortPaginateComponent,
    children: [
      { path: 'frontend', component: FrontendComponent },
      { path: 'backend', component: BackendComponent },
      {
        path: '',
        redirectTo: 'frontend',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchSortPaginateRoutingModule {}
