import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // default route
  // { path: '', pathMatch: 'full', redirectTo: 'meals' },
  // {
  //   path: 'health',
  //   loadChildren: () =>
  //     import('./health/health.module').then(m => m.HealthModule),
  // },
  // {
  //   path: '',
  //   redirectTo: '/auth/login',
  //   pathMatch: 'full',
  // },
  // Fallbak route
  // {
  //   path: '**',
  //   redirectTo: '/not-found',
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
