import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UserEntityDemoInterface } from '../models/user-entity-demo-interface';
import { UserEntityDemoActionTypes } from './user-entity-demo-action.types';

// Get All
export const loadEntityDemoUsers = createAction(
  UserEntityDemoActionTypes.GET_ENTITY_USERS,
);

export const loadEntityDemoUsersSuccess = createAction(
  UserEntityDemoActionTypes.GET_ENTITY_USERS_SUCCESS,
  props<{ users: any }>(),
);

export const loadEntityDemoUsersFailure = createAction(
  UserEntityDemoActionTypes.GET_ENTITY_USERS_FAILURE,
  props<{ error: any }>(),
);

// Add
export const addEntityDemoUserAction = createAction(
  UserEntityDemoActionTypes.ADD_ENTITY_USER,
  props<{ user: UserEntityDemoInterface }>(),
);

export const addEntityDemoUserSuccessAction = createAction(
  UserEntityDemoActionTypes.ADD_ENTITY_USER_SUCCESS,
  props<{ user: UserEntityDemoInterface }>(),
);

export const addEntityDemoUserFailureAction = createAction(
  UserEntityDemoActionTypes.ADD_ENTITY_USER_FAILURE,
);

// Edit
export const editEntityDemoUserAction = createAction(
  UserEntityDemoActionTypes.EDIT_ENTITY_USER,
  props<{ user: Update<UserEntityDemoInterface> }>(),
);

// export const editEntityUserSuccessAction = createAction(
//   UserEntityDemoActionTypes.EDIT_ENTITY_USER_SUCCESS,
//   props<{ user: UserEntityDemoInterface }>(),
// );

// export const editEntityUserFailureAction = createAction(
//   UserEntityDemoActionTypes.EDIT_ENTITY_USER_FAILURE,
// );

// Delete
export const deleteEntityDemoUserAction = createAction(
  UserEntityDemoActionTypes.DELETE_ENTITY_USER,
  props<{ id: number }>(),
);

// export const deleteEntityUserSuccessAction = createAction(
//   UserEntityDemoActionTypes.DELETE_ENTITY_USER_SUCCESS,
// );

// export const deleteEntityUserFailureAction = createAction(
//   UserEntityDemoActionTypes.DELETE_ENTITY_USER_SUCCESS,
// );
