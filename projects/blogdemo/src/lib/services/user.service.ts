import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserStateInterface } from '../blog/user/state/user.reducer';
import {
  selectCurrentUser,
  selectUsers,
} from '../blog/user/state/user.selectors';
import { User } from '../models/types';

// import { selectCurrentUserId } from 'src/app/router.selectors';
// import { selectCurrentUser, selectUsers } from './user.selectors';

@Injectable({ providedIn: 'root' })
export class UserService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';
  users = this.store.pipe(select(selectUsers));
  currentUserId = this.store.pipe(select(selectCurrentUser));
  currentUser = this.store.pipe(select(selectCurrentUser));

  constructor(
    private store: Store<UserStateInterface>,
    private http: HttpClient,
  ) {}

  // currentUser = of({
  //   id: 1,
  //   name: 'Kyle Cordes',
  //   username: 'kcordes',
  //   email: 'kcordes@fake.com',
  //   phone: '123-123-1234',
  // });

  loadUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
}
