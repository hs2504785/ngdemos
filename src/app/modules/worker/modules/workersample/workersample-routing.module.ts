import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersampleComponent } from './workersample.component';

const routes: Routes = [
  {
    path: '',
    component: WorkersampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersampleRoutingModule {}
