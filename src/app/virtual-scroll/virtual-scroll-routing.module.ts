import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './components/demo/demo.component';
import { VirtualScrollComponent } from './virtual-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        pathMatch: 'full',
      },
      {
        path: 'demo',
        component: DemoComponent,
        pathMatch: 'full',
      },
      {
        path: 'vs',
        loadChildren: () =>
          import('./modules/vs/vs.module').then(m => m.VsModule),
      },
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollRoutingModule {}
