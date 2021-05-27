import { createReducer, on } from '@ngrx/store';

import { User } from '../types';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [],
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    users: [...action.users]
  })),
);
