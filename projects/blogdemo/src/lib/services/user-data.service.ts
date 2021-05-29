import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { userFeatureKey } from '../blog/blog.module';
import { User } from '../models/types';

@Injectable()
export class UserDataService extends DefaultDataService<any> {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(userFeatureKey, http, httpUrlGenerator);
    this.getAll();
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}`);
  }

  // update(book): Observable<Book> {
  //   return this.http
  //     .put(`${this.BASE_URL}/${book.id}`, book.changes)
  //     .pipe(map((res: any) => res));
  // }

  // delete(bookId) {
  //   return this.http
  //     .delete(this.BASE_URL + bookId)
  //     .pipe(map((res: any) => res));
  // }

  // constructor(
  //   private store: Store<UserStateInterface>,
  //   private userDataService: UserDataService,
  // ) {}
}
