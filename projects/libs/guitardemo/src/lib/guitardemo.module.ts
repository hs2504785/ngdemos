import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitardemoComponent } from './guitardemo.component';

const routes: Routes = [
  {
    path: '',
    component: GuitardemoComponent,
    children: [
      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./blog/blog.module').then(m => m.BlogModule),
      //   resolve: [BlogResolver],
      // },
      // {
      //   path: '',
      //   redirectTo: 'blog',
      // },
    ],
  },
];

@NgModule({
  declarations: [GuitardemoComponent],
  imports: [RouterModule.forChild(routes)],
})
export class GuitardemoModule {}
