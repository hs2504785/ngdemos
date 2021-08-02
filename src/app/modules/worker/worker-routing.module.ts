import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerComponent } from './worker.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerComponent,
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
        path: 'long-running',
        loadChildren: () =>
          import('./modules/long-running/long-running.module').then(
            m => m.LongRunningModule,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
