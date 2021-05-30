import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostInterface } from '../models/post.interface';
import { postFeatureKey } from '../posts.module';
import { POSTS } from './fake-posts';

@Injectable()
export class PostDataService extends DefaultDataService<any> {
  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(postFeatureKey, http, httpUrlGenerator);
  }

  getAll(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.API_URL}`).pipe(
      catchError(err => {
        console.log(err, 'Feting pos error', err);
        return of(POSTS);
      }),
    );
  }

  add(post): Observable<PostInterface> {
    return this.http.post<PostInterface>(`${this.API_URL}`, post);
  }

  update(post): Observable<PostInterface> {
    return this.http.put<PostInterface>(
      `${this.API_URL}/${post.id}`,
      post.changes,
    );
  }

  delete(postId): Observable<any> {
    return this.http.delete(`${this.API_URL}/${postId}`);
  }

  getById(postId) {
    return this.http.get(`${this.API_URL}/${postId}`);
  }
}
