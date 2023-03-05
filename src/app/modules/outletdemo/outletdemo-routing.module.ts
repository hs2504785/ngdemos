import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletdemoComponent } from './outletdemo.component';

const routes: Routes = [
  {
    path: '',
    component: OutletdemoComponent,
    children: [
      {
        path: 'without-template-outlet',
        loadChildren: () =>
          import(
            './without-template-outlet/without-template-outlet.module'
          ).then(m => m.WithoutTemplateOutletModule),
      },
      {
        path: 'with-template-outlet',
        loadChildren: () =>
          import('./with-template-outlet/with-template-outlet.module').then(
            m => m.WithTemplateOutletModule,
          ),
      },
      {
        path: '',
        redirectTo: 'without-template-outlet',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletdemoRoutingModule {}
