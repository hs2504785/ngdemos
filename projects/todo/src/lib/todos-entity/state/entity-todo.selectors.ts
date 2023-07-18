import {  RouterReducerState, getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  entityTodoesFeatureKey,
  selectAll,
  selectEntities,
  TodoStateInterface,
} from './todo.reducer';

export const entityTodosFeatureSelector =
  createFeatureSelector<TodoStateInterface>(entityTodoesFeatureKey);

export const selectEntityTodos = createSelector(
  entityTodosFeatureSelector,
  selectAll,
);

export const selectTodosEntities = createSelector(
  entityTodosFeatureSelector,
  selectEntities,
);

export const selectRouterState =
  createFeatureSelector<RouterReducerState>('router');

export const { selectRouteParams } = getRouterSelectors(selectRouterState);

export const getEntityTodoById = createSelector(
  selectTodosEntities,
  selectRouteParams,
  (entities, { id }) => {
    return entities && entities[id];
  },
);
