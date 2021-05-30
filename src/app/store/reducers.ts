import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterReducerState;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
