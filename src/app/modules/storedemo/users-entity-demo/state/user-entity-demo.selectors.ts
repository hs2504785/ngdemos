import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userEntityDemoFeatureKey } from './user-entity-demo.reducer';
import * as fromUserDemoEntity from './user-entity-demo.reducer';
export const selectUserEntityDemoFeatureState =
  createFeatureSelector<fromUserDemoEntity.UserEntityDemoStateInterface>(
    userEntityDemoFeatureKey,
  );

export const selectEntityDemoUsers = createSelector(
  selectUserEntityDemoFeatureState,
  fromUserDemoEntity.selectAll,
);

export const selectEntityDemoUsersEntities = createSelector(
  selectUserEntityDemoFeatureState,
  fromUserDemoEntity.selectEntities,
);

export const areEntityUsersLoaded = createSelector(
  selectUserEntityDemoFeatureState,
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
