export enum UserStoreActionTypes {
  GET_STORE_USERS = '[User Store Resolver] Get Users',
  GET_STORE_USERS_SUCCESS = '[User Store Effect] Get Users success',
  GET_STORE_USERS_FAILURE = '[User Store Effect] Get Users failure',

  ADD_STORE_USER = '[User Store Component] Add User',
  ADD_STORE_USER_SUCCESS = '[User Store Component] Add User success',
  ADD_STORE_USER_FAILURE = '[User Store Component] Add User failure',

  EDIT_STORE_USER = '[Edit Store User Component] Edit User',
  EDIT_STORE_USER_SUCCESS = '[Edit Store User Component] Edit User success',
  EDIT_STORE_USER_FAILURE = '[Edit Store User Component] Edit User failure',

  DELETE_STORE_USER = '[User Store Component] Delete User',
  DELETE_STORE_USER_SUCCESS = '[User Store Component] Delete User success',
  DELETE_STORE_USER_FAILURE = '[User Store Component] Delete User failure',
}
