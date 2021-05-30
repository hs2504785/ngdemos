import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { userFeatureKey } from '../users.module';

@Injectable()
export class PostDataService extends DefaultDataService<any> {
  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(userFeatureKey, http, httpUrlGenerator);
  }

  // getAll(): Observable<PostInterface[]> {
  //   return this.http.get<PostInterface[]>(`${this.API_URL}`).pipe(
  //     catchError(err => {
  //       console.log(err, 'Feting pos error', err);
  //       return of(POSTS);
  //     }),
  //   );
  // }

  // add(post): Observable<PostInterface> {
  //   return this.http.post<PostInterface>(`${this.API_URL}`, post);
  // }

  // update(post): Observable<PostInterface> {
  //   return this.http.put<PostInterface>(
  //     `${this.API_URL}/${post.id}`,
  //     post.changes,
  //   );
  // }

  // delete(postId): Observable<any> {
  //   return this.http.delete(`${this.API_URL}/${postId}`);
  // }

  // // to make call to backend, in our case it's not required as we are using resolver to load this module
  // getById(postId) {
  //   return this.http.get(`${this.API_URL}/${postId}`);
  // }
}
