import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

import { selectCurrentPostId } from 'src/app/router.selectors';
import {
  createPost,
  deletePost,
  updatePost
} from '../post/post.actions';
import {
  selectPost,
  selectPosts,
  selectPostsByUser
} from '../post/post.selectors';
import { Post } from '../types';

@Injectable({ providedIn: 'root' })
export class PostService {
  posts = this.store.pipe(select(selectPosts));
  currentPost = this.store.pipe(select(selectPost));
  currentPostId = this.store.pipe(select(selectCurrentPostId));

  constructor(private store: Store<State>) {}

  getPostsByUser(userId: number | string) {
    return this.store.pipe(select(selectPostsByUser(userId)));
  }

  createPost(post: Omit<Post, 'id'>) {
    this.store.dispatch(createPost({ post }));
  }

  deletePost(post: Post) {
    this.store.dispatch(deletePost({ post }));
  }

  updatePost(post: Post) {
    this.store.dispatch(updatePost({ post }));
  }
}
