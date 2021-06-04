import { createAction, props } from '@ngrx/store';
import { UserEntityInterface } from '../models/user-entity-interface';
import { UserEntityActionTypes } from './user-entity-action-types';

// Get All
export const loadEntityUsers = createAction(
  UserEntityActionTypes.GET_ENTITY_USERS,
);

export const loadEntityUsersSuccess = createAction(
  UserEntityActionTypes.GET_ENTITY_USERS_SUCCESS,
  props<{ users: any }>(),
);

export const loadEntityUsersFailure = createAction(
  UserEntityActionTypes.GET_ENTITY_USERS_FAILURE,
  props<{ error: any }>(),
);

// Add
export const addEntityUserAction = createAction(
  UserEntityActionTypes.ADD_ENTITY_USER,
  props<{ user: UserEntityInterface }>(),
);

export const addEntityUserSuccessAction = createAction(
  UserEntityActionTypes.ADD_ENTITY_USER_SUCCESS,
  props<{ user: UserEntityInterface }>(),
);

export const addEntityUserFailureAction = createAction(
  UserEntityActionTypes.ADD_ENTITY_USER_FAILURE,
);

// Edit
export const editEntityUserAction = createAction(
  UserEntityActionTypes.EDIT_ENTITY_USER,
  props<{ user: UserEntityInterface }>(),
);

export const editEntityUserSuccessAction = createAction(
  UserEntityActionTypes.EDIT_ENTITY_USER_SUCCESS,
  props<{ user: UserEntityInterface }>(),
);

export const editEntityUserFailureAction = createAction(
  UserEntityActionTypes.EDIT_ENTITY_USER_FAILURE,
);

// Delete
export const deleteEntityUserAction = createAction(
  UserEntityActionTypes.DELETE_ENTITY_USER,
  props<{ id: number }>(),
);

export const deleteEntityUserSuccessAction = createAction(
  UserEntityActionTypes.DELETE_ENTITY_USER_SUCCESS,
);

export const deleteEntityUserFailureAction = createAction(
  UserEntityActionTypes.DELETE_ENTITY_USER_SUCCESS,
);
