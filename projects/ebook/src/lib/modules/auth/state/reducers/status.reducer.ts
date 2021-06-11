import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/auth.interface';
import { loginSuccessAction } from '../actions/login.actions';
import { logout } from '../actions/logout.actions';

export const statusFeatureKey = 'status';

export interface StatusStateInterface {
  user: User | null;
}

export const initialState: StatusStateInterface = {
  user: null,
};

export const statusReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, { user }) => ({ ...state, user })),
  on(logout, () => initialState),
);

export const getUser = (state: StatusStateInterface) => state.user;
