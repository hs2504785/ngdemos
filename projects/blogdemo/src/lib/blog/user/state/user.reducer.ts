import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../models/types';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserStateInterface extends EntityState<User> {}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserStateInterface = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess, (state, action) =>
    adapter.setAll(action.users, state),
  ),
);

export function userReducer(
  state: UserStateInterface | undefined,
  action: Action,
) {
  return reducer(state, action);
}
