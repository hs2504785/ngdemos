import { createAction, props } from '@ngrx/store';
import { TodoInterface } from '../models/todo.interface';
import { TodoActionTypes } from './todo-action-types';

export const loadTodos = createAction(TodoActionTypes.GET_TODOS);

export const loadTodosSuccess = createAction(
  TodoActionTypes.GET_TODOS_SUCCESS,
  props<{ todos: TodoInterface[] }>(),
);

export const loadTodosFailure = createAction(
  TodoActionTypes.GET_TODOS_FAILURE,
  props<{ error: any }>(),
);

// Add
export const addTodoAction = createAction(
  TodoActionTypes.ADD_TODO,
  props<{ todo: TodoInterface }>(),
);

export const addTodoSuccessAction = createAction(
  TodoActionTypes.ADD_TODO_SUCCESS,
  props<{ todo: TodoInterface }>(),
);

export const addTodoFailureAction = createAction(
  TodoActionTypes.ADD_TODO_FAILURE,
);
