import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../../models/auth.interface';

export const loginAction = createAction(
  '[Login Component] Login',
  props<{ credentials: Credentials }>(),
);

export const loginSuccessAction = createAction(
  '[Auth/API] Login Success',
  props<{ user: User }>(),
);

export const loginFailureAction = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>(),
);

export const loginRedirectAction = createAction('[Auth/API] Login Redirect');
