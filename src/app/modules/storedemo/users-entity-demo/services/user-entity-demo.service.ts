import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserEntityDemoInterface } from '../models/user-entity-demo-interface';

@Injectable({
  providedIn: 'root',
})
export class UserEntityDemoService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserEntityDemoInterface[]> {
    return this.http.get(`${this.API_URL}`).pipe(map((res: any) => res.data));
  }

  addUser(user: UserEntityDemoInterface): Observable<UserEntityDemoInterface> {
    return this.http.post<UserEntityDemoInterface>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserEntityDemoInterface> {
    return this.http.put<UserEntityDemoInterface>(
      `${this.API_URL}/${user.id}`,
      user,
    );
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
