import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../types';

const url = '/api/users';

@Injectable({ providedIn: 'root' })
export class UserLoaderService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http.get<User[]>(url);
  }
}
