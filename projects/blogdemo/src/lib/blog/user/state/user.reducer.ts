import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../models/types';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserStateInterface {
  users: User[];
}

export const initialState: UserStateInterface = {
  users: [],
};

const reducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: [...action.users],
  })),
);

export function userReducer(
  state: UserStateInterface | undefined,
  action: Action,
) {
  return reducer(state, action);
}
