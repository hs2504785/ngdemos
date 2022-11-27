import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoscamdemoComponent } from './noscamdemo.component';

const routes: Routes = [
  {
    path: '',
    component: NoscamdemoComponent,
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
        redirectTo: 'zippy',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoscamdemoRoutingModule {}
