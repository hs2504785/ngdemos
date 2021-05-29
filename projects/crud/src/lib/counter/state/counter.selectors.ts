import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export const selectCounterState =
  createFeatureSelector<fromCounter.CounterStateInterface>(
    fromCounter.counterFeatureKey,
  );

export const selectCount = createSelector(
  selectCounterState,
  (state: fromCounter.CounterStateInterface) => state.count,
);
