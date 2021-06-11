import { Action, createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface LoginStateInterface {
  error: string | null;
  pending: boolean;
}

export const initialState: LoginStateInterface = {
  error: null,
  pending: false,
};

export const loginReducer = createReducer(
  initialState,
  on(loginAction, state => ({
    ...state,
    error: null,
    pending: true,
  })),

  on(loginSuccessAction, state => ({
    ...state,
    error: null,
    pending: false,
  })),
  on(loginFailureAction, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  })),
);
