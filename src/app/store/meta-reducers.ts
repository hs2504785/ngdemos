import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from './reducers';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function newReducer(state, action) {
    const nextState = reducer(state, action);

    if (
      !action.type.includes('router-store') &&
      !action.type.includes('store-devtools')
    ) {
      console.groupCollapsed(action.type);
      console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
      console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
      console.log(
        `%c next state`,
        `color: #4CAF50; font-weight: bold`,
        nextState,
      );
      console.groupEnd();
    }
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [
  // include logger only for non-production
  ...(!environment.production ? [logger] : []),
];
