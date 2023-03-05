import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithTemplateOutletComponent } from './with-template-outlet.component';

const routes: Routes = [
  {
    path: '',
    component: WithTemplateOutletComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.component').then(m => m.HomeModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithTemplateOutletRoutingModule {}
