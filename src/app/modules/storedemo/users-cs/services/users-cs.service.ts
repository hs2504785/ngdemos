import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserCsInterface } from '../models/user-cs-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersCsService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserCsInterface[]> {
    return this.http.get(`${this.API_URL}`).pipe(map((res: any) => res.data));
  }

  addUser(user: UserCsInterface): Observable<UserCsInterface> {
    return this.http.post<UserCsInterface>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserCsInterface> {
    return this.http.put<UserCsInterface>(`${this.API_URL}/${user.id}`, user);
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
