import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from '../types';

const url = '/api/posts';

@Injectable({ providedIn: 'root' })
export class PostLoaderService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<Post[]>(url);
  }

  create(post: Omit<Post, 'id'>) {
    return this.http.post<Post>(url, post);
  }

  delete(post: Post) {
    return this.http.delete(`${url}/${post.id}`);
  }

  update(post: Post) {
    return this.http.put<Post>(`${url}/${post.id}`, post);
  }
}
