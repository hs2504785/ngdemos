import { createReducer, on } from '@ngrx/store';
import { UserStoreStateInterface } from '../models/user-store-state.interface';
import * as UserStoreActions from './user-store.actions';
import { deleteStoreUserSuccessAction } from './user-store.actions';

export const userStoreFeatureKey = 'userStore';

export const initialState: UserStoreStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  loaded: false,
};

export const userStoreReducer = createReducer(
  initialState,

  on(UserStoreActions.loadStoreUsers, (state): UserStoreStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    UserStoreActions.loadStoreUsersSuccess,
    (state, action): UserStoreStateInterface => {
      return {
        ...state,
        isLoading: false,
        data: action.users,
        loaded: true,
      };
    },
  ),
  on(UserStoreActions.loadStoreUsersFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  // Add
  on(
    UserStoreActions.addStoreUserAction,
    (state): UserStoreStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    UserStoreActions.addStoreUserSuccessAction,
    (state, action): UserStoreStateInterface => ({
      ...state,
      isLoading: false,
      data: [action.user, ...state.data],
    }),
  ),

  on(
    UserStoreActions.addStoreUserFailureAction,
    (state): UserStoreStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    UserStoreActions.editStoreUserAction,
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
    UserStoreActions.editStoreUserSuccessAction,
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
    UserStoreActions.editStoreUserFailureAction,
    (state): UserStoreStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  // Delete
  on(
    UserStoreActions.deleteStoreUserAction,
    (state, action): UserStoreStateInterface => {
      const users = state.data.filter(h => h.id !== action.id);
      return {
        ...state,
        data: users,
      };
    },
  ),

  on(
    UserStoreActions.deleteStoreUserSuccessAction,
    (state): UserStoreStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    UserStoreActions.deleteStoreUserFailureAction,
    (state): UserStoreStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);
