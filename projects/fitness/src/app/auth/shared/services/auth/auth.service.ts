import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from 'projects/fitness/src/app/store';
import { tap } from 'rxjs/operators';
import { UserInterface } from '../../models/user.interface';

@Injectable()
export class AuthService {
  auth$ = this.af.authState.pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }
      const user: UserInterface = {
        email: next.email,
        uid: next.uid,
        authenticated: true,
      };
      this.store.set('user', user);
    }),
  );

  constructor(private store: Store, private af: AngularFireAuth) {}

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email/password
  loginUser(email, password) {
    return this.af.signInWithEmailAndPassword(email, password);
  }
  logoutUser() {
    return this.af.signOut();
  }

  get user() {
    return this.af.currentUser;
  }

  get authState() {
    return this.af.authState;
  }
}
