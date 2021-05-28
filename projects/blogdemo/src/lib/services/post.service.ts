import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PostStateInterface } from '../blog/post-list/state/post.reducer';
import {
  selectPost,
  selectPosts,
  selectPostsByUser,
} from '../blog/post-list/state/post.selectors';
import { selectCurrentPostId } from '../blog/state/router.selectors';
import { posts } from '../mocks/data';
import { Post } from '../models/types';

@Injectable({ providedIn: 'root' })
export class PostService {
  // posts = of(posts);
  API_URL = 'https://jsonplaceholder.typicode.com/posts';
  posts = this.store.pipe(select(selectPosts));
  currentPost = this.store.pipe(select(selectPost));
  // currentPostId = this.store.pipe(select(selectCurrentPostId));

  constructor(
    private store: Store<PostStateInterface>,
    private http: HttpClient,
  ) {}

  getPostsByUser(userId: number | string) {
    return this.store.pipe(select(selectPostsByUser(userId)));
  }

  load() {
    return this.http.get<Post[]>(this.API_URL);
  }

  create(post: Omit<Post, 'id'>) {
    return this.http.post<Post>(this.API_URL, post);
  }

  delete(post: Post) {
    return this.http.delete(`${this.API_URL}/${post.id}`);
  }

  update(post: Post) {
    return this.http.put<Post>(`${this.API_URL}/${post.id}`, post);
  }

  // createPost(post: Omit<Post, 'id'>) {
  //   this.store.dispatch(createPost({ post }));
  // }

  // deletePost(post: Post) {
  //   this.store.dispatch(deletePost({ post }));
  // }

  // updatePost(post: Post) {
  //   this.store.dispatch(updatePost({ post }));
  // }
}
