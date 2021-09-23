import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentsComponent } from './lazy-components.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponentsComponent,
    children: [
      {
        path: 'lazy1',
        loadChildren: () =>
          import('./modules/lazy1/lazy1.module').then(m => m.Lazy1Module),
      },
      {
        path: 'lazy2',
        loadChildren: () =>
          import('./modules/lazy2/lazy2.module').then(m => m.Lazy2Module),
      },
      {
        path: '',
        redirectTo: 'lazy1',
      },
    ],
  },
  {
    path: 'lazydemo',
    loadChildren: () =>
      import('./modules/lazydemo/lazydemo.module').then(m => m.LazydemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyComponentsRoutingModule {}
