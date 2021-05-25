import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models/todo-state.interface';
import * as fromTodo from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>(
  fromTodo.todoFeatureKey,
);

export const selectTodos = createSelector(selectTodoState, state => state.data);
