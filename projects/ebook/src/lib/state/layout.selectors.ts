import { createFeatureSelector, createSelector } from '@ngrx/store';
import { layoutFeatureKey, LayoutStateInterface } from './layout.reducer';

export const selectLayoutFeature =
  createFeatureSelector<LayoutStateInterface>(layoutFeatureKey);

export const selectShowSidenav = createSelector(
  selectLayoutFeature,
  (state: LayoutStateInterface) => state.showSidenav,
);
