import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpCachingService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(environment.baseUrl + '/countries');
  }
  getStates(countryCode) {
    return this.http.get(
      `${environment.baseUrl}/states?countryCode=${countryCode}`,
    );
  }

  getCities(countryCode, stateCode) {
    return this.http.get<any>(
      `${environment.baseUrl}/cities?countryCode=${countryCode}&stateCode=${stateCode}`,
    );
  }
}
