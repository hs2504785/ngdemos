import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CacheService } from 'src/app/shared/services/cache.service';
import { search } from 'src/app/shared/utils/search.util';

@Injectable({
  providedIn: 'root',
})
export class UserCachedService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';
  private userQuerySubject = new Subject<string>();

  readonly users$ = this.userQuerySubject.pipe(
    search(query => this.loadUsers(query)),
  );

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  searchUser(query: string) {
    this.userQuerySubject.next(query);
  }

  loadUsers(query: string): Observable<string[]> {
    return this.cacheService
      .getData(`${this.API_URL}?q=${query}`)
      .pipe(
        map(users =>
          users.filter((user: any) =>
            user?.name.toLowerCase().startsWith(query.toLowerCase()),
          ),
        ),
      );
  }
}
