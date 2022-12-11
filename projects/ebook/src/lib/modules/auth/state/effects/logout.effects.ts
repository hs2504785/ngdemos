import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { LogoutConfirmationDialogComponent } from '../../components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { AuthService } from '../../services/auth.service';
import {
  logout,
  logoutConfirmation,
  logoutConfirmationDismiss,
} from '../actions/logout.actions';
import { idleTimeout } from '../actions/user.actions';

@Injectable()
export class LogoutEffects {
  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutConfirmation),
      exhaustMap(() => {
        const dialogRef = this.dialog.open<
          LogoutConfirmationDialogComponent,
          undefined,
          boolean
        >(LogoutConfirmationDialogComponent);

        return dialogRef.afterClosed();
      }),
      map(result => (result ? logout() : logoutConfirmationDismiss())),
    ),
  );

  logoutIdleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(idleTimeout),
      map(() => logout()),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
  ) {}
}
