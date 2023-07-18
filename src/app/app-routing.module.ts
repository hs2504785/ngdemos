import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from 'projects/todo/src/lib/services/todo.resolver';

const routes: Routes = [
  {
    path: 'idb-demo',
    loadChildren: () =>
      import('projects/libs/idb-demo/src/public-api').then(
        m => m.IdbDemoModule,
      ),
  },
  {
    path: 'guitardemo',
    loadChildren: () =>
      import('projects/libs/guitardemo/src/public-api').then(
        m => m.GuitardemoModule,
      ),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('projects/chat/src/public-api').then(m => m.ChatModule),
  },
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
      import(
        './modules/intersection-observer/intersection-observer.module'
      ).then(m => m.IntersectionObserverModule),
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
  {
    path: 'search-sort-paginate',
    loadChildren: () =>
      import('./modules/search-sort-paginate/search-sort-paginate.module').then(
        m => m.SearchSortPaginateModule,
      ),
  },
  {
    path: 'lazy-components',
    loadChildren: () =>
      import('./modules/lazy-components/lazy-components.module').then(
        m => m.LazyComponentsModule,
      ),
  },
  {
    path: 'reusable-search',
    loadChildren: () =>
      import('./modules/reusable-search/reusable-search.module').then(
        m => m.ReusableSearchModule,
      ),
  },
  { path: 'http-caching', loadChildren: () => import('./modules/http-caching/http-caching.module').then(m => m.HttpCachingModule) },
  { path: 'scam', loadChildren: () => import('./modules/scam/scam.module').then(m => m.ScamModule) },
  { path: 'aggriddemo', loadChildren: () => import('./modules/aggriddemo/aggriddemo.module').then(m => m.AggriddemoModule) },
  { path: 'lazy-modals', loadChildren: () => import('./modules/lazy-modals/lazy-modals.module').then(m => m.LazyModalsModule) },
  { path: 'apmdemo', loadChildren: () => import('./modules/apmdemo/apmdemo.module').then(m => m.ApmdemoModule) },
  { path: 'outletdemo', loadChildren: () => import('./modules/outletdemo/outletdemo.module').then(m => m.OutletdemoModule) },
  {
    path: 'chat-bot',
    loadComponent: () => import('./modules/chat-bot/chat-bot.component').then(m => m.ChatBotComponent)
  },
  // Fallbak route
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
