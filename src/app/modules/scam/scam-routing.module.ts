import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScamComponent } from './scam.component';

const routes: Routes = [
  {
    path: '',
    component: ScamComponent,
    children: [
      {
        path: 'scamdemo',
        loadChildren: () =>
          import('./modules/scamdemo/scamdemo.module').then(
            m => m.ScamdemoModule,
          ),
      },
      {
        path: 'noscamdemo',
        loadChildren: () =>
          import('./modules/noscamdemo/noscamdemo.module').then(
            m => m.NoscamdemoModule,
          ),
      },
      {
        path: '',
        redirectTo: 'scamdemo',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScamRoutingModule {}
