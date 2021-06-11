import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { loginRedirectAction } from '../state/actions/login.actions';
import { selectLoggedIn } from '../state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    // this.router.navigate(['/ebook/login']);
    // return of(false);
    return this.store.select(selectLoggedIn).pipe(
      map(authed => {
        if (!authed) {
          this.store.dispatch(loginRedirectAction());
          return false;
        }

        return true;
      }),
      take(1),
    );
  }
}
