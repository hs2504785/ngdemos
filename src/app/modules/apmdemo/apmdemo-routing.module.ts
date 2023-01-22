import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApmdemoComponent } from './apmdemo.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ApmdemoComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./products/product.module').then(m => m.ProductModule),
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApmdemoRoutingModule {}
