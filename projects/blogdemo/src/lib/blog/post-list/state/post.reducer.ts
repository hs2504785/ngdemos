import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Post } from '../../../models/types';
import {
  createPostSuccess,
  deletePostSuccess,
  loadPostsSuccess,
  updatePostSuccess,
} from './post.actions';

export const postFeatureKey = 'post';

export interface PostStateInterface extends EntityState<Post> {}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostStateInterface = adapter.getInitialState({});

export const postReducer = createReducer(
  initialState,

  on(loadPostsSuccess, (state, action) => adapter.setAll(action.posts, state)),
  on(createPostSuccess, (state, action) => adapter.addOne(action.post, state)),
  on(deletePostSuccess, (state, action) =>
    adapter.removeOne(action.postId, state),
  ),
  // Note: if we weren't sending this to the server, we could
  // use the Update<Post> type, which is smaller
  on(updatePostSuccess, (state, { post }) =>
    adapter.updateOne({ id: post.id, changes: post }, state),
  ),
);
