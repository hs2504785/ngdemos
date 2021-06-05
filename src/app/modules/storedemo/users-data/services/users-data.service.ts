import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDataInterface } from '../models/user-data-interface';
import { usersFeatureKey } from '../users-data.module';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService extends DefaultDataService<any> {
  API_URL = 'https://hksocket.herokuapp.com/users';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(usersFeatureKey, http, httpUrlGenerator);
  }

  getAll(): Observable<UserDataInterface[]> {
    return this.http.get<UserDataInterface[]>(`${this.API_URL}`);
    // .pipe(map((res: any) => res.data));
  }

  add(user): Observable<UserDataInterface> {
    return this.http.post<UserDataInterface>(`${this.API_URL}`, user);
  }

  update(user): Observable<UserDataInterface> {
    return this.http.put<UserDataInterface>(
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
