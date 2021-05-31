import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CacheService } from 'src/app/shared/services/cache.service';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  constructor(private cacheService: CacheService) {}

  getRepos(): Observable<any[]> {
    return this.cacheService
      .getData(`https://api.github.com/search/repositories?q=angular`)
      .pipe(map((data: any) => data.items));
  }
}
