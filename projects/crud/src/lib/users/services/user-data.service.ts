import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';
import { userFeatureKey } from '../users.module';

@Injectable()
export class UserDataService extends DefaultDataService<any> {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(userFeatureKey, http, httpUrlGenerator);
  }

  getAll(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.API_URL}`);
  }

  add(user): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.API_URL}`, user);
  }

  update(user): Observable<UserInterface> {
    return this.http.put<UserInterface>(
      `${this.API_URL}/${user.id}`,
      user.changes,
    );
  }

  delete(userId): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }

  // // to make call to backend, in our case it's not required as we are using resolver to load this module
  // getById(postId) {
  //   return this.http.get(`${this.API_URL}/${postId}`);
  // }
}
