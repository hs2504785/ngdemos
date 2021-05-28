import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/types';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>(),
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>(),
);
