import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserWsInterface } from '../models/user-ws-interface';
import { usersWsFeatureKey } from '../users-ws.module';

@Injectable({
  providedIn: 'root',
})
export class UsersWsDataService extends DefaultDataService<any> {
  API_URL = 'https://hksocket.herokuapp.com/users';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(usersWsFeatureKey, http, httpUrlGenerator);
  }

  getAll(): Observable<UserWsInterface[]> {
    return this.http.get<UserWsInterface[]>(`${this.API_URL}`);
    // .pipe(map((res: any) => res.data));
  }

  add(user): Observable<UserWsInterface> {
    return this.http.post<UserWsInterface>(`${this.API_URL}`, user);
  }

  update(user): Observable<UserWsInterface> {
    return this.http.put<UserWsInterface>(
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
