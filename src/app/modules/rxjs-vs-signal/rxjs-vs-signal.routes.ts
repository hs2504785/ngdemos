import { Route } from '@angular/router';
import { RxjsVsSignalComponent } from './rxjs-vs-signal.component';

export const RXJS_VS_SIGNAL_ROUTES: Route[] = [
  {
    path: '',
    component: RxjsVsSignalComponent,
    children: [
      {
        path: 'rxjs-counter',
        loadComponent: () =>
          import('./rxjs-counter/rxjs-counter.component').then(
            m => m.RxjsCounterComponent,
          ),
      },
      {
        path: 'signal-counter',
        loadComponent: () =>
          import('./signal-counter/signal-counter.component').then(
            m => m.SignalCounterComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'rxjs-counter',
        pathMatch: 'full',
      },
    ],
  },
];
