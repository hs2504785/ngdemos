import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScamdemoComponent } from './scamdemo.component';

const routes: Routes = [
  {
    path: '',
    component: ScamdemoComponent,
    children: [
      {
        path: 'zippy',
        loadChildren: () =>
          import('./modules/zippy/zippy.module').then(m => m.ZippyModule),
      },
      {
        path: 'zippy1',
        loadChildren: () =>
          import('./modules/zippy1/zippy1.module').then(m => m.Zippy1Module),
      },
      {
        path: '',
        redirectTo: 'zipp1',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScamdemoRoutingModule {}
