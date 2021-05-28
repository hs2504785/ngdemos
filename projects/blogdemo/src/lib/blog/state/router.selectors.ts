import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter =
  createFeatureSelector<State, fromRouter.RouterReducerState<any>>('router');

export const { selectRouteParam, selectQueryParam } =
  fromRouter.getSelectors(selectRouter);

const selectCurrentUserIdParam = selectRouteParam('userId');

export const selectCurrentUserId = createSelector(
  selectCurrentUserIdParam,
  userId => (userId ? +userId : undefined),
);

const selectCurrentPostIdParam = selectQueryParam('postId');

export const selectCurrentPostId = createSelector(
  selectCurrentPostIdParam,
  postId => +postId,
);
