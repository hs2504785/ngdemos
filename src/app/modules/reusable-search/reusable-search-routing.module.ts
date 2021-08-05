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
