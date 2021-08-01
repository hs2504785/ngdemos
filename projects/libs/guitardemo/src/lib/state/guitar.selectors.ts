import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGuitar from './guitar.reducer';

export const selectGuitarState =
  createFeatureSelector<fromGuitar.GuitarStateInterface>(
    fromGuitar.guitarFeatureKey,
  );

export const selectGuitars = createSelector(
  selectGuitarState,
  state => state.items,
);

export const selectCart = createSelector(
  selectGuitarState,
  state => state.cart,
);
