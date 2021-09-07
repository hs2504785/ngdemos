import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { UserInterface } from '../reuse-comp-logic/models/user-interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  USERS_URL = `${env.API_URL}/users`;
  constructor(private http: HttpClient) {}

  get(url): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.get(this.USERS_URL);
  }
}
