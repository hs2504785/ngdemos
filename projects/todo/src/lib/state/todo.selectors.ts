import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.interface';
import { todoFeatureKey } from './todo.reducer';

export const todosFeatureSelector =
  createFeatureSelector<TodoStateInterface>(todoFeatureKey);

export const selectTodos = createSelector(
  todosFeatureSelector,
  state => state.data,
);

// Depricated
// https://timdeschryver.dev/blog/parameterized-selectors
// export const getTodoById = createSelector(
//   todosFeatureSelector,
//   (state, props): TodoStateInterface =>
//     state.data && state.data.find((item) => item.id === props.id)
// );

export const getTodoById = (todoId: number) =>
  createSelector(selectTodos, todos => {
    return todos.find(item => item.id === todoId);
  });
