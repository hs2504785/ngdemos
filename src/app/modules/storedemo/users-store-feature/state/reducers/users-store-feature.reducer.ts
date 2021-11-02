import { createFeature, createReducer, on } from '@ngrx/store';
import { UserStoreStateInterface } from '../../../users-store/models/user-store-state.interface';
import * as UsersStoreFeatureActions from '../actions/users-store-feature.actions';

export const usersStoreFeatureFeatureKey = 'usersStoreFeature';

export const initialState: UserStoreStateInterface = {
  data: null,
  error: null,
  isLoading: false,
  loaded: false,
};

export const userStoreFeature = createFeature({
  name: 'usersStoreFeature',
  reducer: createReducer(
    initialState,

    on(
      UsersStoreFeatureActions.loadStoreUsers,
      (state): UserStoreStateInterface => {
        return {
          ...state,
          isLoading: true,
        };
      },
    ),
    on(
      UsersStoreFeatureActions.loadStoreUsersSuccess,
      (state, action): UserStoreStateInterface => {
        return {
          ...state,
          isLoading: false,
          data: action.users,
          loaded: true,
        };
      },
    ),
    on(UsersStoreFeatureActions.loadStoreUsersFailure, (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }),

    // Add
    on(
      UsersStoreFeatureActions.addStoreUserAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: true,
      }),
    ),
    on(
      UsersStoreFeatureActions.addStoreUserSuccessAction,
      (state, action): UserStoreStateInterface => ({
        ...state,
        isLoading: false,
        data: [action.user, ...state.data],
      }),
    ),

    on(
      UsersStoreFeatureActions.addStoreUserFailureAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: false,
      }),
    ),

    on(
      UsersStoreFeatureActions.editStoreUserAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: true,
      }),
    ),
    // Another way to update post
    // on(
    //   editPostSuccessAction,
    //   (state, action): PostStateInterface => {
    //     const index = state.data.findIndex((h) => h.id === action.post.id);
    //     let updatedState = [...state.data];
    //     if (index >= 0) {
    //       updatedState = [
    //         ...state.data.slice(0, index),
    //         action.post,
    //         ...state.data.slice(index + 1),
    //       ];
    //     }

    //     return {
    //       ...state,
    //       isLoading: false,
    //       data: updatedState,
    //     };
    //   }
    // ),
    on(
      UsersStoreFeatureActions.editStoreUserSuccessAction,
      (state, action): UserStoreStateInterface => {
        const updatedUser = state.data.map(user =>
          user.id === action.user.id ? action.user : user,
        );

        return {
          ...state,
          isLoading: false,
          data: updatedUser,
        };
      },
    ),
    on(
      UsersStoreFeatureActions.editStoreUserFailureAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: false,
      }),
    ),

    // Delete
    on(
      UsersStoreFeatureActions.deleteStoreUserAction,
      (state, action): UserStoreStateInterface => {
        const users = state.data.filter(h => h.id !== action.id);
        return {
          ...state,
          data: users,
        };
      },
    ),

    on(
      UsersStoreFeatureActions.deleteStoreUserSuccessAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: false,
      }),
    ),

    on(
      UsersStoreFeatureActions.deleteStoreUserFailureAction,
      (state): UserStoreStateInterface => ({
        ...state,
        isLoading: false,
      }),
    ),
  ),
});
