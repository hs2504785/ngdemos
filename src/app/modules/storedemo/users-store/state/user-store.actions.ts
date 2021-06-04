import { createAction, props } from '@ngrx/store';
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

// // Add
// export const addTodoAction = createAction(
//   TodoActionTypes.ADD_TODO,
//   props<{ todo: TodoInterface }>(),
// );

// export const addTodoSuccessAction = createAction(
//   TodoActionTypes.ADD_TODO_SUCCESS,
//   props<{ todo: TodoInterface }>(),
// );

// export const addTodoFailureAction = createAction(
//   TodoActionTypes.ADD_TODO_FAILURE,
// );

// // Edit
// export const editTodoAction = createAction(
//   TodoActionTypes.EDIT_TODO,
//   props<{ todo: TodoInterface }>(),
// );

// export const editTodoSuccessAction = createAction(
//   TodoActionTypes.EDIT_TODO_SUCCESS,
//   props<{ todo: TodoInterface }>(),
// );

// export const editTodoFailureAction = createAction(
//   TodoActionTypes.EDIT_TODO_FAILURE,
// );

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
