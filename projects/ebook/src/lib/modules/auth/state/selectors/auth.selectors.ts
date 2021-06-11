import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import { LoginStateInterface } from '../reducers/login.reducer';
import { StatusStateInterface } from '../reducers/status.reducer';

export const selectAuthState =
  createFeatureSelector<fromAuth.AuthStateInterface>(fromAuth.authFeatureKey);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  state => state.status,
);

export const selectUser = createSelector(
  selectAuthStatusState,
  (state: StatusStateInterface) => state.user,
);

export const selectLoggedIn = createSelector(selectUser, user => !!user);

export const selectLoginState = createSelector(
  selectAuthState,
  state => state.login,
);

export const selectLoginError = createSelector(
  selectLoginState,
  (state: LoginStateInterface) => state.error,
);

export const selectLoginPagePending = createSelector(
  selectLoginState,
  (state: LoginStateInterface) => state.pending,
);
