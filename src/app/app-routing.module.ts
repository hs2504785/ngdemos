import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from 'projects/todo/src/lib/services/todo.resolver';

const routes: Routes = [
  {
    path: 'ebook',
    loadChildren: () =>
      import('projects/ebook/src/public-api').then(m => m.EbookModule),
  },
  {
    path: 'eshop',
    loadChildren: () => import('./eshop/eshop.module').then(m => m.EshopModule),
  },

  {
    path: 'github-repo',
    loadChildren: () =>
      import('projects/github-repo/src/public-api').then(
        m => m.GithubRepoModule,
      ),
  },
  {
    path: 'crud',
    loadChildren: () =>
      import('projects/crud/src/public-api').then(m => m.CrudModule),
  },
  {
    path: 'blogdemo',
    loadChildren: () =>
      import('projects/blogdemo/src/public-api').then(m => m.BlogdemoModule),
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
  {
    path: 'ucard',
    loadChildren: () => import('./ucard/ucard.module').then(m => m.UcardModule),
  },
  {
    path: 'storedemo',
    loadChildren: () =>
      import('./modules/storedemo/storedemo.module').then(
        m => m.StoredemoModule,
      ),
  },
  {
    path: 'worker',
    loadChildren: () =>
      import('./modules/worker/worker.module').then(m => m.WorkerModule),
  },
  {
    path: 'change-detection',
    loadChildren: () =>
      import('./change-detection/change-detection.module').then(
        m => m.ChangeDetectionModule,
      ),
  },
  // Fallbak route
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
