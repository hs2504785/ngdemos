export enum UserEntityDemoActionTypes {
  GET_ENTITY_USERS = '[User Entity Resolver] Get Users',
  GET_ENTITY_USERS_SUCCESS = '[User Entity Effect] Get Users success',
  GET_ENTITY_USERS_FAILURE = '[User Entity Effect] Get Users failure',

  ADD_ENTITY_USER = '[User Entity Component] Add User',
  ADD_ENTITY_USER_SUCCESS = '[User Entity Component] Add User success',
  ADD_ENTITY_USER_FAILURE = '[User Entity Component] Add User failure',

  EDIT_ENTITY_USER = '[Edit Entity User Component] Edit User',
  EDIT_ENTITY_USER_SUCCESS = '[Edit Entity User Component] Edit User success',
  EDIT_ENTITY_USER_FAILURE = '[Edit Entity User Component] Edit User failure',

  DELETE_ENTITY_USER = '[User Entity Component] Delete User',
  DELETE_ENTITY_USER_SUCCESS = '[User Entity Component] Delete User success',
  DELETE_ENTITY_USER_FAILURE = '[User Entity Component] Delete User failure',
}
