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
