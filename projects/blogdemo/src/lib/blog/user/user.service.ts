import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { State } from 'src/app/reducers';
import { selectCurrentUserId } from 'src/app/router.selectors';
import { selectCurrentUser, selectUsers } from './user.selectors';

@Injectable({ providedIn: 'root' })
export class UserService {
  users = this.store.pipe(select(selectUsers));
  currentUserId = this.store.pipe(select(selectCurrentUserId));
  currentUser = this.store.pipe(select(selectCurrentUser));

  constructor(private store: Store<State>) {}
}
