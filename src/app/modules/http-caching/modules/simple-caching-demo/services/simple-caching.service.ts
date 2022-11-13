import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SimpleCachingService {
  private readonly countries$: Observable<any>;
  constructor(private http: HttpClient) {
    this.countries$ = this.getData(environment.baseUrl + '/countries')
   }

   getData(apiUrl: string) {
    return this.http.get<any>(apiUrl).pipe(shareReplay());
   }

   getCountries() {
    return this.countries$;
   }
}
