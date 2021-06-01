import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './eshop.component';

const routes: Routes = [
  {
    path: '',
    component: EshopComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then(m => m.PagesModule),
      },
      // {
      //   path: 'auth',
      //   loadChildren: () =>
      //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
      // },
      {
        path: 'shopping',
        loadChildren: () =>
          import('./modules/products/products.module').then(
            m => m.ProductsModule,
          ),
      },
      // {
      //   path: 'category',
      //   loadChildren: () =>
      //     import('./modules/category/category.module').then(
      //       (m) => m.CategoryModule
      //     ),
      // },
    ],
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EshopRoutingModule {}
