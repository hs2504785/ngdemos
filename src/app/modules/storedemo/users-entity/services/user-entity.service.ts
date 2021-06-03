import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserEntityInterface } from '../models/user-entity-interface';

@Injectable({
  providedIn: 'root',
})
export class UserEntityService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserEntityInterface[]> {
    return this.http.get(`${this.API_URL}`).pipe(map((res: any) => res.data));
  }

  addUser(user: UserEntityInterface): Observable<UserEntityInterface> {
    return this.http.post<UserEntityInterface>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserEntityInterface> {
    return this.http.put<UserEntityInterface>(
      `${this.API_URL}/${user.id}`,
      user,
    );
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
