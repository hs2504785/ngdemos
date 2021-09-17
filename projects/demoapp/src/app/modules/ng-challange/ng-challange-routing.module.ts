import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChallangeComponent } from './ng-challange.component';

const routes: Routes = [
  {
    path: '',
    component: NgChallangeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule,
          ),
      },

      {
        path: 'components',
        loadChildren: () =>
          import('./modules/components/components.module').then(
            m => m.ComponentsModule,
          ),
      },
      {
        path: 'directives',
        loadChildren: () =>
          import('./modules/directives/directives.module').then(
            m => m.DirectivesModule,
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./modules/services/services.module').then(
            m => m.ServicesModule,
          ),
      },
      {
        path: 'pipes',
        loadChildren: () =>
          import('./modules/pipes/pipes.module').then(m => m.PipesModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgChallangeRoutingModule {}
