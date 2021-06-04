import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStoreStateInterface } from '../models/user-store-state.interface';
import * as fromUserStore from './user-store.reducer';

export const selectUserStoreFeatureState =
  createFeatureSelector<UserStoreStateInterface>(
    fromUserStore.userStoreFeatureKey,
  );

export const selectStoreUsers = createSelector(
  selectUserStoreFeatureState,
  (state: UserStoreStateInterface) => state.data,
);

export const areUsersLoaded = createSelector(
  selectUserStoreFeatureState,
  (state: UserStoreStateInterface): boolean => {
    return state.loaded;
  },
);
