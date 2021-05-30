import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { PostResolver } from './posts/services/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then(m => m.PostsModule),
        resolve: {
          posts: PostResolver,
        },
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'counter',
        loadChildren: () =>
          import('./counter/counter.module').then(m => m.CounterModule),
      },
      {
        path: '',
        redirectTo: 'posts',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
