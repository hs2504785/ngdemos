import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

// import { selectCurrentUserId } from 'src/app/router.selectors';
// import { selectCurrentUser, selectUsers } from './user.selectors';

@Injectable({ providedIn: 'root' })
export class UserService {
  // users = this.store.pipe(select(selectUsers));
  // currentUserId = this.store.pipe(select(selectCurrentUserId));
  // currentUser = this.store.pipe(select(selectCurrentUser));
  // constructor(private store: Store<State>) {}

  currentUser = of({
    id: 1,
    name: 'Kyle Cordes',
    username: 'kcordes',
    email: 'kcordes@fake.com',
    phone: '123-123-1234',
  });
}
