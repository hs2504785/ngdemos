import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from 'projects/todo/src/lib/services/todo.resolver';

const routes: Routes = [
  {
    path: 'blogdemo',
    loadChildren: () =>
      import('projects/blog/src/public-api').then(m => m.BlogModule),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('projects/todo/src/public-api').then(m => m.TodoModule),
    resolve: [TodoResolver],
  },
  {
    path: 'demos',
    loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
  },
  {
    path: 'treegrid',
    loadChildren: () =>
      import('./treegrid/treegrid.module').then(m => m.TreegridModule),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('./performance/performance.module').then(m => m.PerformanceModule),
  },
  {
    path: 'intersection-observer',
    loadChildren: () =>
      import('./intersection-observer/intersection-observer.module').then(
        m => m.IntersectionObserverModule,
      ),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () =>
      import('./virtual-scroll/virtual-scroll.module').then(
        m => m.VirtualScrollModule,
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },

  // default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
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
