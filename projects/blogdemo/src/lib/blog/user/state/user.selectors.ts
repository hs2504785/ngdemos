import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUserId } from '../../state/router.selectors';
import { userFeatureKey, UserStateInterface } from './user.reducer';

export const selectUserState =
  createFeatureSelector<UserStateInterface>(userFeatureKey);

export const selectUsers = createSelector(
  selectUserState,
  state => state.users,
);

export const selectCurrentUser = createSelector(
  selectUsers,
  selectCurrentUserId,
  (users, userId) => users.find(user => user.id === userId),
);
