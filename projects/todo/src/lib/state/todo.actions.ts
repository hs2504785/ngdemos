import { createAction, props } from '@ngrx/store';
import { TodoInterface } from '../models/todo.interface';

export const loadTodos = createAction('[Todo Resolver] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo Effect] Load Todos Success',
  props<{ todos: TodoInterface[] }>(),
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>(),
);
