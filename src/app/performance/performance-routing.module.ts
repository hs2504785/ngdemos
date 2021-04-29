import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvoidFunctionCallComponent } from './components/avoid-function-call/avoid-function-call.component';
import { NgforTrackByComponent } from './components/ngfor-track-by/ngfor-track-by.component';
import { PerformanceComponent } from './performance.component';

const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
    children: [
      {
        path: 'avoid-function-call',
        component: AvoidFunctionCallComponent,
      },
      {
        path: 'ngfor-trackby',
        component: NgforTrackByComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceRoutingModule {}
