import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdemoComponent } from './blogdemo.component';

const routes: Routes = [
  {
    path: '',
    component: BlogdemoComponent,
    // redirectTo: 'blog',
  },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  // },
];

@NgModule({
  declarations: [BlogdemoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [BlogdemoComponent],
})
export class BlogdemoModule {}
