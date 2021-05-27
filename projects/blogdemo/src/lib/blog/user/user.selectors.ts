import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectCurrentUserId } from 'src/app/router.selectors';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectCurrentUser = createSelector(
  selectUsers,
  selectCurrentUserId,
  (users, userId) => users.find(user => user.id === userId)
);
