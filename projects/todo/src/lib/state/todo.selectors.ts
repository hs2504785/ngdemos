import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { of } from 'rxjs';
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

// Parameterized Selector
// export const getTodoById = (todoId: number) =>
//   createSelector(selectTodos, todos => {
//     return todos.find(item => item.id === todoId);
//   });

export const selectRouterState =
  createFeatureSelector<RouterReducerState>('router');

export const { selectRouteParams } = getSelectors(selectRouterState);

export const getTodoById = createSelector(
  selectTodos,
  selectRouteParams,
  (todos, { id }) => {
    return todos && todos.find(item => item.id === +id);
  },
);
