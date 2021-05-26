export enum TodoActionTypes {
  GET_TODOS = '[Todo Resolver] Get Todos',
  GET_TODOS_SUCCESS = '[Entity Todo Effect] Get todos success',
  GET_TODOS_FAILURE = '[Entity Todo Effect] Get todos failure',

  ADD_ENTITY_TODO = '[Add Entity Todo Component] Add Entity Todo',
  ADD_ENTITY_TODO_SUCCESS = '[Add Entity Todo Component] Add Entity todo success',
  ADD_ENTITY_TODO_FAILURE = '[Add Entity Todo Component] Add Entity todo failure',

  EDIT_TODO = '[Entity Edit Todo Component] Entity Edit Todo',
  EDIT_TODO_SUCCESS = '[Entity Edit Todo Component] Entity Edit todo success',
  EDIT_TODO_FAILURE = '[Entity Edit Todo Component] Edit todo failure',

  DELETE_ENTITY_TODO = '[Todos] Delete entity Todo',
  DELETE_ENTITY_TODO_SUCCESS = '[Todos] Delete entity todo success',
  DELETE_ENTITY_TODO_FAILURE = '[Todos] Delete entity todo failure',
}
