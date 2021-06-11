import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    this.router.navigate(['/ebook/login']);
    return of(false);
    // return this.store.select(fromAuth.selectLoggedIn).pipe(
    //   map((authed) => {
    //     if (!authed) {
    //       this.store.dispatch(AuthApiActions.loginRedirect());
    //       return false;
    //     }

    //     return true;
    //   }),
    //   take(1)
    // );
  }
}
