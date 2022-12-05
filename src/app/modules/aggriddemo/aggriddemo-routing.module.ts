import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggriddemoComponent } from './aggriddemo.component';

const routes: Routes = [
  {
    path: '',
    component: AggriddemoComponent,
    children: [
      {
        path: 'ag-simple',
        loadChildren: () =>
          import('./modules/ag-simple/ag-simple.module').then(
            m => m.AgSimpleModule,
          ),
      },
      {
        path: 'ag-sorting',
        loadChildren: () =>
          import('./modules/ag-sorting/ag-sorting.module').then(
            m => m.AgSortingModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggriddemoRoutingModule {}
