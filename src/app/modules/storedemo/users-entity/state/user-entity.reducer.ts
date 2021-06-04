import { createReducer, on } from '@ngrx/store';
import { UserEntityStateInterface } from '../models/user-entity-state.interface';
import * as UserEntityActions from './user-entity.actions';

export const userEntityFeatureKey = 'userEntity';

export const initialState: UserEntityStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  loaded: false,
};

export const userEntityReducer = createReducer(
  initialState,

  on(UserEntityActions.loadEntityUsers, (state): UserEntityStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    UserEntityActions.loadEntityUsersSuccess,
    (state, action): UserEntityStateInterface => {
      return {
        ...state,
        isLoading: false,
        data: action.users,
        loaded: true,
      };
    },
  ),
  on(UserEntityActions.loadEntityUsersFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  // Add
  on(
    UserEntityActions.addEntityUserAction,
    (state): UserEntityStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    UserEntityActions.addEntityUserSuccessAction,
    (state, action): UserEntityStateInterface => ({
      ...state,
      isLoading: false,
      data: [action.user, ...state.data],
    }),
  ),

  on(
    UserEntityActions.addEntityUserFailureAction,
    (state): UserEntityStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    UserEntityActions.editEntityUserAction,
    (state): UserEntityStateInterface => ({
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
    UserEntityActions.editEntityUserSuccessAction,
    (state, action): UserEntityStateInterface => {
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
    UserEntityActions.editEntityUserFailureAction,
    (state): UserEntityStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  // Delete
  on(
    UserEntityActions.deleteEntityUserAction,
    (state, action): UserEntityStateInterface => {
      const users = state.data.filter(h => h.id !== action.id);
      return {
        ...state,
        data: users,
      };
    },
  ),

  on(
    UserEntityActions.deleteEntityUserSuccessAction,
    (state): UserEntityStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    UserEntityActions.deleteEntityUserFailureAction,
    (state): UserEntityStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);
