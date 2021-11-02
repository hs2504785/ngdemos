import { userStoreFeature } from '../reducers/users-store-feature.reducer';

export const {
  selectUsersStoreFeatureState: selectUserStoreFeatureState,
  selectData: selectStoreUsers,
  selectLoaded: areUsersLoaded,
} = userStoreFeature;
// export const selectUserStoreFeatureState =
//   createFeatureSelector<UserStoreStateInterface>(
//     fromUserStore.userStoreFeatureKey,
//   );

// export const selectStoreUsers = createSelector(
//   selectUserStoreFeatureState,
//   (state: UserStoreStateInterface) => state.data,
// );

// export const areUsersLoaded = createSelector(
//   selectUserStoreFeatureState,
//   (state: UserStoreStateInterface): boolean => {
//     return state.loaded;
//   },
// );
