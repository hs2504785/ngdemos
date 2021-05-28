import { Action, createReducer, on } from '@ngrx/store';
import { Post } from '../../../models/types';
import * as PostActions from './post.actions';

export const postFeatureKey = 'post';

export interface PostStateInterface {
  posts: Post[];
}

export const initialState: PostStateInterface = {
  posts: [],
};

export const postReducer = createReducer(
  initialState,

  on(PostActions.loadPostsSuccess, (state, action) => ({
    ...state,
    posts: [...action.posts],
  })),
  // on(PostActions.createPostSuccess, (state, action) => ({
  //   ...state,
  //   posts: [...state.posts, action.post]
  // })),
  // on(PostActions.deletePostSuccess, (state, action) => ({
  //   ...state,
  //   posts: state.posts.filter(post => post.id !== action.postId)
  // })),
  // on(PostActions.updatePostSuccess, (state, action) => {
  //   const index = state.posts.findIndex(
  //     post => post.id === action.post.id
  //   );
  //   if (index >= 0) {
  //     return {
  //       ...state,
  //       posts: [
  //         ...state.posts.slice(0, index),
  //         action.post,
  //         ...state.posts.slice(index + 1, state.posts.length)
  //       ]
  //     };
  //   } else {
  //     return state;
  //   }
  // })
);
