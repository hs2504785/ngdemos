import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableSearchComponent } from './reusable-search.component';

const routes: Routes = [
  {
    path: '',
    component: ReusableSearchComponent,
    children: [
      {
        path: 'car-search',
        loadChildren: () =>
          import('./car-search/car-search.module').then(m => m.CarSearchModule),
      },
      {
        path: 'user-search',
        loadChildren: () =>
          import('./user-search/user-search.module').then(
            m => m.UserSearchModule,
          ),
      },
      {
        path: 'user-search-cached',
        loadChildren: () =>
          import('./user-search-cached/user-search-cached.module').then(
            m => m.UserSearchCachedModule,
          ),
      },
      {
        path: '',
        redirectTo: 'car-search',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReusableSearchRoutingModule {}
