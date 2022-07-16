import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdbDemoComponent } from './idb-demo.component';

const routes: Routes = [
  {
    path: '',
    component: IdbDemoComponent,
    children: [
      {
        path: 'idb-sample',
        loadChildren: () =>
          import('./modules/idb-sample/idb-sample.module').then(
            m => m.IdbSampleModule,
          ),
      },

      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./blog/blog.module').then(m => m.BlogModule),
      //   resolve: [BlogResolver],
      // },
      {
        path: '',
        redirectTo: 'idb-sample',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [IdbDemoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [IdbDemoComponent],
})
export class IdbDemoModule {}
