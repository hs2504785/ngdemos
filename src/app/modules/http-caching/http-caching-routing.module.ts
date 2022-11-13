import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpCachingComponent } from './http-caching.component';

const routes: Routes = [
  {
    path: '',
    component: HttpCachingComponent,
    children: [
      {
        path: 'in-memory',
        loadChildren: () =>
          import('./modules/in-memory/in-memory.module').then(
            m => m.InMemoryModule,
          ),
      },
      {
        path: 'with-caching',
        loadChildren: () =>
          import('./modules/with-caching/with-caching.module').then(
            m => m.WithCachingModule,
          ),
      },
      {
        path: 'without-caching',
        loadChildren: () =>
          import('./modules/without-caching/without-caching.module').then(
            m => m.WithoutCachingModule,
          ),
      },
      {
        path: 'simple-caching',
        loadChildren: () =>
          import('./modules/simple-caching/simple-caching.module').then(
            m => m.SimpleCachingModule,
          ),
      },

      {
        path: 'simple-caching-demo',
        loadChildren: () =>
          import(
            './modules/simple-caching-demo/simple-caching-demo.module'
          ).then(m => m.SimpleCachingDemoModule),
      },

      {
        path: '',
        redirectTo: 'in-memory',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpCachingRoutingModule {}
