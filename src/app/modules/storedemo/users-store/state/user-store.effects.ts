import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadStoreUsers,
  loadStoreUsersFailure,
  loadStoreUsersSuccess,
} from './user-store.actions';
import { UserStoreService } from '../services/user-store.service';
import { UserStoreInterface } from '../models/user-store-interface';

@Injectable()
export class UserStoreEffects {
  // Get All
  loadStoreUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadStoreUsers),
      switchMap(() => {
        return this.userStoreSetvice.getUsers().pipe(
          map((users: UserStoreInterface[]) => {
            return loadStoreUsersSuccess({ users });
          }),
          catchError(error => of(loadStoreUsersFailure({ error }))),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private userStoreSetvice: UserStoreService,
  ) {}
}
