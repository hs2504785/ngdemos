import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TodoActionTypes } from './todo-entity-action-types';
import { TodoInterface } from '../../models/todo.interface';

export const entityLoadTodos = createAction(TodoActionTypes.GET_TODOS);

export const entityLoadTodosSuccess = createAction(
  TodoActionTypes.GET_TODOS_SUCCESS,
  props<{ todos: TodoInterface[] }>(),
);

export const entityLoadTodosFailure = createAction(
  TodoActionTypes.GET_TODOS_FAILURE,
  props<{ error: any }>(),
);

// export const addTodo = createAction(
//   '[Todo/API] Add Todo',
//   props<{ todo: Todo }>(),
// );

// export const upsertTodo = createAction(
//   '[Todo/API] Upsert Todo',
//   props<{ todo: Todo }>(),
// );

// export const addTodos = createAction(
//   '[Todo/API] Add Todos',
//   props<{ todos: TodoInterface[] }>(),
// );

// export const upsertTodos = createAction(
//   '[Todo/API] Upsert Todos',
//   props<{ todos: TodoInterface[] }>(),
// );

// export const updateTodo = createAction(
//   '[Todo/API] Update Todo',
//   props<{ todo: Update<TodoInterface> }>(),
// );

// export const updateTodos = createAction(
//   '[Todo/API] Update Todos',
//   props<{ todos: Update<TodoInterface>[] }>(),
// );

// export const deleteTodo = createAction(
//   '[Todo/API] Delete Todo',
//   props<{ id: string }>(),
// );

// export const deleteTodos = createAction(
//   '[Todo/API] Delete Todos',
//   props<{ ids: string[] }>(),
// );

export const clearTodos = createAction('[Todo/API] Clear Todos');
