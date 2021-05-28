import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentPostId } from '../../state/router.selectors';

import * as fromPost from './post.reducer';

export const selectPostState =
  createFeatureSelector<fromPost.PostStateInterface>(fromPost.postFeatureKey);

export const selectPosts = createSelector(
  selectPostState,
  state => state.posts,
);

export const selectPost = createSelector(
  selectPosts,
  selectCurrentPostId,
  (posts, postId) => posts.find(post => post.id === +postId),
);

export const selectPostsByUser = (userId: string | number) =>
  createSelector(selectPosts, posts =>
    posts.filter(post => post.userId === +userId),
  );
