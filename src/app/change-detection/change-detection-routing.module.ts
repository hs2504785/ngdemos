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
        path: 'default-onpush',
        loadChildren: () =>
          import('./modules/default-onpush/default-onpush.module').then(
            m => m.DefaultOnpushModule,
          ),
      },
      {
        path: 'onpush',
        loadChildren: () =>
          import('./modules/onpush/onpush.module').then(m => m.OnpushModule),
      },
      {
        path: 'onpush-async',
        loadChildren: () =>
          import('./modules/onpush-async/onpush-async.module').then(
            m => m.OnpushAsyncModule,
          ),
      },
      {
        path: 'rx-angular-push',
        loadChildren: () =>
          import('./modules/rx-angular-push/rx-angular-push.module').then(
            m => m.RxAngularPushModule,
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
