import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export interface CounterStateInterface {
  count: number;
}

export const initialState: CounterStateInterface = {
  count: 0,
};

export const reducer = createReducer(
  initialState,

  on(CounterActions.increment, state => {
    return {
      count: state.count + 1,
    };
  }),
  on(CounterActions.decrement, state => {
    return {
      count: state.count - 1,
    };
  }),
  on(CounterActions.reset, state => {
    return {
      count: 0,
    };
  }),
);
