import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  entityTodoesFeatureKey,
  selectAll,
  TodoStateInterface,
} from './todo.reducer';

export const entityTodosFeatureSelector =
  createFeatureSelector<TodoStateInterface>(entityTodoesFeatureKey);

export const selectEntityTodos = createSelector(
  entityTodosFeatureSelector,
  selectAll,
);

// export const selectRouterState =
//   createFeatureSelector<RouterReducerState>('router');

// export const { selectRouteParams } = getSelectors(selectRouterState);

// export const getTodoById = createSelector(
//   selectTodos,
//   selectRouteParams,
//   (todos, { id }) => {
//     return todos && todos.find(item => item.id === +id);
//   },
// );
