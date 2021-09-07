import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'reuse-comp-logic',
    loadChildren: () =>
      import('./modules/reuse-comp-logic/reuse-comp-logic.module').then(
        m => m.ReuseCompLogicModule,
      ),
  },
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
