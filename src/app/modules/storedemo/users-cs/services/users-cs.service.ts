import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CacheService } from 'src/app/shared/services/cache.service';
import { UserCs } from '../models/user-cs-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersCsService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getUsers(): Observable<UserCs[]> {
    return this.cacheService
      .getData(`${this.API_URL}`)
      .pipe(map((res: any) => res.data));
  }

  addUser(user: UserCs): Observable<UserCs> {
    return this.http.post<UserCs>(`${this.API_URL}`, user);
  }

  updateUser(user): Observable<UserCs> {
    return this.http.put<UserCs>(`${this.API_URL}/${user.id}`, user);
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`);
  }
}
