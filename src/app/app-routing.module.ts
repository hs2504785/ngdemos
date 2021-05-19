import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module').then((m) => m.TreeModule),
  },
  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'treegrid', loadChildren: () => import('./treegrid/treegrid.module').then(m => m.TreegridModule) },
  { path: 'performance', loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule) },
  { path: 'intersection-observer', loadChildren: () => import('./intersection-observer/intersection-observer.module').then(m => m.IntersectionObserverModule) },
  { path: 'virtual-scroll', loadChildren: () => import('./virtual-scroll/virtual-scroll.module').then(m => m.VirtualScrollModule) },
  // default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
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
