import { createReducer, on } from '@ngrx/store';
import { logoutConfirmation } from '../modules/auth/state/actions/logout.actions';
import { closeSidenav, openSidenav } from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutStateInterface {
  showSidenav: boolean;
}

const initialState: LayoutStateInterface = {
  showSidenav: false,
};

export const layoutReducer = createReducer(
  initialState,
  // Even though the `state` is unused, it helps infer the return type
  on(closeSidenav, state => ({ showSidenav: false })),
  on(openSidenav, state => ({ showSidenav: true })),
  on(logoutConfirmation, state => ({ showSidenav: false })),
);
