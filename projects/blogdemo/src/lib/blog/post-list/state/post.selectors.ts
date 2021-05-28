import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentPostId } from '../../state/router.selectors';
import * as fromPost from './post.reducer';
import { PostStateInterface } from './post.reducer';

export const { selectAll, selectEntities } = fromPost.adapter.getSelectors();

export const selectPostState = createFeatureSelector<PostStateInterface>(
  fromPost.postFeatureKey,
);

export const selectPosts = createSelector(selectPostState, selectAll);

export const selectPost = createSelector(
  createSelector(selectPostState, selectEntities),
  selectCurrentPostId,
  (entities, postId) => (postId ? entities[postId] : undefined),
);

export const selectPostsByUser = (userId: string | number) =>
  createSelector(selectPosts, posts =>
    posts.filter(post => post.userId === +userId),
  );
