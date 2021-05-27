import { createAction, props } from '@ngrx/store';
import { Post } from '../types';

export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const createPost = createAction(
  '[Post] Create Post',
  props<{ post: Omit<Post, 'id'> }>()
);

export const createPostSuccess = createAction(
  '[Post] Create Post Success',
  props<{ post: Post }>()
);

export const createPostFailure = createAction(
  '[Post] Create Post Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ post: Post }>()
);

export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ postId: number }>()
);

export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: any }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ post: Post }>()
);

export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ post: Post }>()
);

export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ error: any }>()
);
