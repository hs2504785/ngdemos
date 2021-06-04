import { createAction, props } from '@ngrx/store';
import { UserStoreInterface } from '../models/user-store-interface';
import { UserStoreActionTypes } from './user-store-action-types';

// Get All
export const loadStoreUsers = createAction(
  UserStoreActionTypes.GET_STORE_USERS,
);

export const loadStoreUsersSuccess = createAction(
  UserStoreActionTypes.GET_STORE_USERS_SUCCESS,
  props<{ users: any }>(),
);

export const loadStoreUsersFailure = createAction(
  UserStoreActionTypes.GET_STORE_USERS_FAILURE,
  props<{ error: any }>(),
);

// Add
export const addStoreUserAction = createAction(
  UserStoreActionTypes.ADD_STORE_USER,
  props<{ user: UserStoreInterface }>(),
);

export const addStoreUserSuccessAction = createAction(
  UserStoreActionTypes.ADD_STORE_USER_SUCCESS,
  props<{ user: UserStoreInterface }>(),
);

export const addStoreUserFailureAction = createAction(
  UserStoreActionTypes.ADD_STORE_USER_FAILURE,
);

// Edit
export const editStoreUserAction = createAction(
  UserStoreActionTypes.EDIT_STORE_USER,
  props<{ user: UserStoreInterface }>(),
);

export const editStoreUserSuccessAction = createAction(
  UserStoreActionTypes.EDIT_STORE_USER_SUCCESS,
  props<{ user: UserStoreInterface }>(),
);

export const editStoreUserFailureAction = createAction(
  UserStoreActionTypes.EDIT_STORE_USER_FAILURE,
);

// Delete
export const deleteStoreUserAction = createAction(
  UserStoreActionTypes.DELETE_STORE_USER,
  props<{ id: number }>(),
);

export const deleteStoreUserSuccessAction = createAction(
  UserStoreActionTypes.DELETE_STORE_USER_SUCCESS,
);

export const deleteStoreUserFailureAction = createAction(
  UserStoreActionTypes.DELETE_STORE_USER_SUCCESS,
);
