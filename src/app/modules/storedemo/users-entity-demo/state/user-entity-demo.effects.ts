import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  addEntityDemoUserAction,
  addEntityDemoUserFailureAction,
  addEntityDemoUserSuccessAction,
  deleteEntityDemoUserAction,
  editEntityDemoUserAction,
  loadEntityDemoUsers,
  loadEntityDemoUsersFailure,
  loadEntityDemoUsersSuccess,
} from './user-entity-demo.actions';
import { UserEntityDemoInterface } from '../models/user-entity-demo-interface';
import { UserEntityDemoService } from '../services/user-entity-demo.service';

@Injectable()
export class UserEntityDemoEffects {
  // Get All
  loadEntityUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEntityDemoUsers),
      switchMap(() => {
        return this.userentitySetvice.getUsers().pipe(
          map((users: UserEntityDemoInterface[]) => {
            return loadEntityDemoUsersSuccess({ users });
          }),
          catchError(error => of(loadEntityDemoUsersFailure({ error }))),
        );
      }),
    );
  });

  // Delete
  deleteEntityUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteEntityDemoUserAction),
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
      ofType(addEntityDemoUserAction),
      switchMap(({ user }) => {
        return this.userentitySetvice.addUser(user).pipe(
          map((user: UserEntityDemoInterface) => {
            return addEntityDemoUserSuccessAction({ user });
          }),
          catchError(() => {
            return of(addEntityDemoUserFailureAction());
          }),
        );
      }),
    ),
  );
  // Edit
  editEntityUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editEntityDemoUserAction),
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
    private userentitySetvice: UserEntityDemoService,
  ) {}
}
