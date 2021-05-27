import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  OnInitEffects
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { UserLoaderService } from './user-loader.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects implements OnInitEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.userLoaderService.load().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error =>
            of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private userLoaderService: UserLoaderService
  ) {}

  ngrxOnInitEffects(): Action {
    return UserActions.loadUsers();
  }
}
