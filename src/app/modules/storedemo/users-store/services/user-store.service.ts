import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreInterface } from '../models/user-store-interface';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserStoreInterface[]> {
    return this.http
      .get<UserStoreInterface[]>(`${this.API_URL}`)
      .pipe(map((res: any) => res.data));
  }

  addUser(user: UserStoreInterface): Observable<UserStoreInterface> {
    return this.http.post<UserStoreInterface>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserStoreInterface> {
    return this.http.put<UserStoreInterface>(
      `${this.API_URL}/${user.id}`,
      user,
    );
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
