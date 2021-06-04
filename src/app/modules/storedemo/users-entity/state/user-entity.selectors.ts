import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserEntity from './user-entity.reducer';

export const selectUserEntityFeatureState =
  createFeatureSelector<fromUserEntity.UserEntityStateInterface>(
    fromUserEntity.userEntityFeatureKey,
  );

export const selectEntityUsers = createSelector(
  selectUserEntityFeatureState,
  fromUserEntity.selectAll,
);

export const selectEntityUsersEntities = createSelector(
  selectUserEntityFeatureState,
  fromUserEntity.selectEntities,
);

export const areEntityUsersLoaded = createSelector(
  selectUserEntityFeatureState,
  state => state.loaded,
);
// export const selectRouterState =
//   createFeatureSelector<RouterReducerState>('router');

// export const { selectRouteParams } = getSelectors(selectRouterState);

// export const getEntityTodoById = createSelector(
//   selectTodosEntities,
//   selectRouteParams,
//   (entities, { id }) => {
//     return entities && entities[id];
//   },
// );
