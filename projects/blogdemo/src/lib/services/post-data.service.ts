import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { postFeatureKey } from '../blog/blog.module';
import { Post } from '../models/types';

@Injectable()
export class PostDataService extends DefaultDataService<any> {
  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(postFeatureKey, http, httpUrlGenerator);
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}`);
  }

  add(post): Observable<Post> {
    return this.http.post<Post>(`${this.API_URL}`, post);
  }

  update(post): Observable<Post> {
    return this.http.put<Post>(`${this.API_URL}/${post.id}`, post.changes);
  }

  delete(postId): Observable<any> {
    return this.http.delete(`${this.API_URL}/${postId}`);
  }
}
