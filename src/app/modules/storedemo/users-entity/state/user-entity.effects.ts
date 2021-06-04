import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  addEntityUserAction,
  addEntityUserFailureAction,
  addEntityUserSuccessAction,
  deleteEntityUserAction,
  editEntityUserAction,
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
  deleteEntityUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteEntityUserAction),
        mergeMap(({ id }) => {
          return this.userentitySetvice.removeUser(id);
          // .pipe(
          //   map(() => {
          //     return deleteEntityUserSuccessAction();
          //   }),
          //   catchError(() => {
          //     return of(deleteEntityUserFailureAction());
          //   }),
          // );
        }),
      ),
    { dispatch: false },
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
  editEntityUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editEntityUserAction),
        switchMap(({ user }) => {
          const update = {
            id: user.id,
            ...user.changes,
          };
          return this.userentitySetvice.updateUser(update);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private userentitySetvice: UserEntityService,
  ) {}
}
