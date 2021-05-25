import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.interface';
import * as fromTodo from './todo.reducer';

export const selectTodoStateInterface =
  createFeatureSelector<TodoStateInterface>(fromTodo.todoFeatureKey);

export const selectTodos = createSelector(
  selectTodoStateInterface,
  state => state.data,
);
