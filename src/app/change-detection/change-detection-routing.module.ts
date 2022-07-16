import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionComponent,
    children: [
      {
        path: 'timers',
        loadChildren: () =>
          import('./modules/timers/timers.module').then(m => m.TimersModule),
      },
      {
        path: 'outside-clicks',
        loadChildren: () =>
          import('./modules/outside-clicks/outside-clicks.module').then(
            m => m.OutsideClicksModule,
          ),
      },
      {
        path: 'jquery-plugin',
        loadChildren: () =>
          import('./modules/jquery-plugin/jquery-plugin.module').then(
            m => m.JqueryPluginModule,
          ),
      },
      {
        path: '',
        redirectTo: 'timers',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectionRoutingModule {}
