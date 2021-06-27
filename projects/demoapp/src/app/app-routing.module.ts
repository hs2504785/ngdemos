import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./modules/content-projection/content-projection.module').then(
        m => m.ContentProjectionModule,
      ),
  },
  {
    path: 'dynamic-template',
    loadChildren: () =>
      import('./dynamic-template/dynamic-template.module').then(
        m => m.DynamicTemplateModule,
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule,
      ),
    pathMatch: 'full',
  },
  { path: 'credit-card', loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule) },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
