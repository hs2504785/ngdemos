import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createAction,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  props
} from '@ngrx/store';

import { environment } from '../../environments/environment';

export const updateTitle = createAction(
  '[CONFIG] UPDATE_TITLE',
  props<{ title: string }>()
);

export interface State {
  title: string;
  router: fromRouter.RouterReducerState<any>;
}

const titleReducer = createReducer(
  'Our Blog',
  on(updateTitle, (_state, action) => {
    return action.title;
  })
);

export const reducers: ActionReducerMap<State> = {
  title: titleReducer,
  router: fromRouter.routerReducer
};

export function logger(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return function newReducer(state, action) {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(
      `%c prev state`,
      `color: #9E9E9E; font-weight: bold`,
      state
    );
    console.log(
      `%c action`,
      `color: #03A9F4; font-weight: bold`,
      action
    );
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState
    );
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<State>[] = [
  // include logger only for non-production
  ...(!environment.production ? [logger] : [])
];

export const selectState = (state: State) => state;

export const selectTitle = createSelector(
  selectState,
  state => state.title
);
