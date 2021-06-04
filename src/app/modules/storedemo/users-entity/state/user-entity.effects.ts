import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  addEntityUserAction,
  addEntityUserFailureAction,
  addEntityUserSuccessAction,
  deleteEntityUserAction,
  deleteEntityUserFailureAction,
  deleteEntityUserSuccessAction,
  editEntityUserAction,
  editEntityUserFailureAction,
  editEntityUserSuccessAction,
  loadEntityUsers,
  loadEntityUsersFailure,
  loadEntityUsersSuccess,
} from './user-entity.actions';
import { UserEntityInterface } from '../models/user-entity-interface';
import { UserEntityService } from '../services/user-entity.service';

@Injectable()
export class UserEntityEffects {
  // Get All
  loadEntityUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEntityUsers),
      switchMap(() => {
        return this.userentitySetvice.getUsers().pipe(
          map((users: UserEntityInterface[]) => {
            return loadEntityUsersSuccess({ users });
          }),
          catchError(error => of(loadEntityUsersFailure({ error }))),
        );
      }),
    );
  });

  // Delete
  deleteEntityUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEntityUserAction),
      mergeMap(({ id }) => {
        return this.userentitySetvice.removeUser(id).pipe(
          map(() => {
            return deleteEntityUserSuccessAction();
          }),
          catchError(() => {
            return of(deleteEntityUserFailureAction());
          }),
        );
      }),
    ),
  );

  // Add
  createStoreUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEntityUserAction),
      switchMap(({ user }) => {
        return this.userentitySetvice.addUser(user).pipe(
          map((user: UserEntityInterface) => {
            return addEntityUserSuccessAction({ user });
          }),
          catchError(() => {
            return of(addEntityUserFailureAction());
          }),
        );
      }),
    ),
  );

  // Edit
  editEntityUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editEntityUserAction),
      switchMap(({ user }) => {
        return this.userentitySetvice.updateUser(user).pipe(
          map((user: UserEntityInterface) => {
            return editEntityUserSuccessAction({ user });
          }),
          catchError(() => {
            return of(editEntityUserFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private userentitySetvice: UserEntityService,
  ) {}
}
