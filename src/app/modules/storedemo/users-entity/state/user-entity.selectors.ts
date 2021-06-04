import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserEntityStateInterface } from '../models/user-entity-state.interface';
import * as fromUserEntity from './user-entity.reducer';

export const selectUserEntityFeatureState =
  createFeatureSelector<UserEntityStateInterface>(
    fromUserEntity.userEntityFeatureKey,
  );

export const selectEntityUsers = createSelector(
  selectUserEntityFeatureState,
  (state: UserEntityStateInterface) => state.data,
);

export const areEntityUsersLoaded = createSelector(
  selectUserEntityFeatureState,
  (state: UserEntityStateInterface): boolean => {
    return state.loaded;
  },
);
