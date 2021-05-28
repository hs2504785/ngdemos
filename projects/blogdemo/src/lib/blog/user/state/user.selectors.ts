import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUserId } from '../../state/router.selectors';

import * as fromUser from './user.reducer';

export const { selectAll, selectEntities } = fromUser.adapter.getSelectors();

export const selectUserState =
  createFeatureSelector<fromUser.UserStateInterface>(fromUser.userFeatureKey);

export const selectUsers = createSelector(selectUserState, selectAll);

export const selectCurrentUser = createSelector(
  createSelector(selectUserState, selectEntities),
  selectCurrentUserId,
  (userEntities, currentUserId) => {
    return currentUserId ? userEntities[currentUserId] : undefined;
  },
);
