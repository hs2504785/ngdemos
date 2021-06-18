import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerdemoComponent } from './workerdemo.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerdemoComponent,
    children: [
      {
        path: 'workersample',
        loadChildren: () =>
          import('./modules/workersample/workersample.module').then(
            m => m.WorkersampleModule,
          ),
      },
      {
        path: 'workerdemo',
        loadChildren: () =>
          import('./modules/workerapp/workerapp.module').then(
            m => m.WorkerappModule,
          ),
      },
      {
        path: '',
        redirectTo: 'workersample',
      },
    ],
  },
];

@NgModule({
  declarations: [WorkerdemoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [WorkerdemoComponent],
})
export class WorkerdemoModule {}
