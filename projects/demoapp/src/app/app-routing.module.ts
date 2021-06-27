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
      import('./modules/dynamic-template/dynamic-template.module').then(
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
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./modules/credit-card/credit-card.module').then(
        m => m.CreditCardModule,
      ),
  },
  {
    path: 'tooltip',
    loadChildren: () =>
      import('./modules/tooltip/tooltip.module').then(m => m.TooltipModule),
  },
  { path: 'file-size', loadChildren: () => import('./modules/file-size/file-size.module').then(m => m.FileSizeModule) },
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
