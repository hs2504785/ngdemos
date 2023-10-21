import { Route } from '@angular/router';
import { FormsComponent } from './forms.component';

export const FORMS_ROUTES: Route[] = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'reusable-form-group',
        loadComponent: () =>
          import('./reusable-form-group/reusable-form-group.component').then(
            m => m.ReusableFormGroupComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'reusable-form-group',
        pathMatch: 'full',
      },
    ],
  },
];
