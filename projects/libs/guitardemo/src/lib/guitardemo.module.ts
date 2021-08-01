import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitardemoComponent } from './guitardemo.component';
import { GuitarsListComponent } from './guitars-list/guitars-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

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
  declarations: [
    GuitardemoComponent,
    HeaderComponent,
    HomeComponent,
    GuitarsListComponent,
  ],
  imports: [RouterModule.forChild(routes)],
})
export class GuitardemoModule {}
