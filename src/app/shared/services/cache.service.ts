import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { publishReplay, refCount, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public responseCache = new Map();

  constructor(private http: HttpClient) {}

  getData(url): Observable<any[]> {
    const cachedResponse = this.responseCache.get(url);

    if (cachedResponse) {
      return of(cachedResponse);
    } else {
      return this.http
        .get<any>(`https://api.github.com/search/repositories?q=angular`)
        .pipe(
          publishReplay(1),
          refCount(),
          tap(resp => {
            this.responseCache.set(url, resp);
          }),
        );
    }
  }

  clearCache() {
    this.responseCache.clear();
  }
}
