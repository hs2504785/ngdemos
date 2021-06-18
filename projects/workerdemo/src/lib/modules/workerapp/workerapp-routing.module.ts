import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerappComponent } from './workerapp.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerappComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerappRoutingModule {}
