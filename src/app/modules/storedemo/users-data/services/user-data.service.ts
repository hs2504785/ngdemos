import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDataInterface } from '../models/user-data-interface';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDataInterface[]> {
    return this.http.get(`${this.API_URL}`).pipe(map((res: any) => res.data));
  }

  addUser(user: UserDataInterface): Observable<UserDataInterface> {
    return this.http.post<UserDataInterface>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserDataInterface> {
    return this.http.put<UserDataInterface>(`${this.API_URL}/${user.id}`, user);
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
