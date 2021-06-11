import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Credentials } from '../../models/auth.interface';
import { AuthService } from '../../services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginRedirectAction,
  loginSuccessAction,
} from '../actions/login.actions';
import { logout } from '../actions/logout.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      map(action => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map(user => loginSuccessAction({ user })),
          catchError(error => of(loginFailureAction({ error }))),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigate(['/ebook']);
        }),
      ),
    { dispatch: false },
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginRedirectAction, logout),
        tap(authed => {
          this.router.navigate(['/ebook/login']);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
