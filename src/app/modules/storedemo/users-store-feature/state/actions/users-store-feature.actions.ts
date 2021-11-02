import { createAction, props } from '@ngrx/store';
import { UserStoreInterface } from '../../../users-store/models/user-store-interface';
import { UserStoreFeatureActionTypes } from './users-store-feature.action-types';

// Get All
export const loadStoreUsers = createAction(
  UserStoreFeatureActionTypes.GET_STORE_USERS,
);

export const loadStoreUsersSuccess = createAction(
  UserStoreFeatureActionTypes.GET_STORE_USERS_SUCCESS,
  props<{ users: any }>(),
);

export const loadStoreUsersFailure = createAction(
  UserStoreFeatureActionTypes.GET_STORE_USERS_FAILURE,
  props<{ error: any }>(),
);

// Add
export const addStoreUserAction = createAction(
  UserStoreFeatureActionTypes.ADD_STORE_USER,
  props<{ user: UserStoreInterface }>(),
);

export const addStoreUserSuccessAction = createAction(
  UserStoreFeatureActionTypes.ADD_STORE_USER_SUCCESS,
  props<{ user: UserStoreInterface }>(),
);

export const addStoreUserFailureAction = createAction(
  UserStoreFeatureActionTypes.ADD_STORE_USER_FAILURE,
);

// Edit
export const editStoreUserAction = createAction(
  UserStoreFeatureActionTypes.EDIT_STORE_USER,
  props<{ user: UserStoreInterface }>(),
);

export const editStoreUserSuccessAction = createAction(
  UserStoreFeatureActionTypes.EDIT_STORE_USER_SUCCESS,
  props<{ user: UserStoreInterface }>(),
);

export const editStoreUserFailureAction = createAction(
  UserStoreFeatureActionTypes.EDIT_STORE_USER_FAILURE,
);

// Delete
export const deleteStoreUserAction = createAction(
  UserStoreFeatureActionTypes.DELETE_STORE_USER,
  props<{ id: number }>(),
);

export const deleteStoreUserSuccessAction = createAction(
  UserStoreFeatureActionTypes.DELETE_STORE_USER_SUCCESS,
);

export const deleteStoreUserFailureAction = createAction(
  UserStoreFeatureActionTypes.DELETE_STORE_USER_SUCCESS,
);
