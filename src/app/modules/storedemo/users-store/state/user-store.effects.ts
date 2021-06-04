import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  addStoreUserAction,
  addStoreUserFailureAction,
  addStoreUserSuccessAction,
  deleteStoreUserAction,
  deleteStoreUserFailureAction,
  deleteStoreUserSuccessAction,
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

  // Delete
  deleteStoreUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStoreUserAction),
      mergeMap(({ id }) => {
        return this.userStoreSetvice.removeUser(id).pipe(
          map(() => {
            return deleteStoreUserSuccessAction();
          }),
          catchError(() => {
            return of(deleteStoreUserFailureAction());
          }),
        );
      }),
    ),
  );

  // Add
  createStoreUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStoreUserAction),
      switchMap(({ user }) => {
        return this.userStoreSetvice.addUser(user).pipe(
          map((user: UserStoreInterface) => {
            return addStoreUserSuccessAction({ user });
          }),
          catchError(() => {
            return of(addStoreUserFailureAction());
          }),
        );
      }),
    ),
  );

  // Edit
  // editPost$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(editTodoAction),
  //     switchMap(({ todo }) => {
  //       // this.loader.show();
  //       return this.userStoreSetvice.updateTodo(todo).pipe(
  //         map((todo: TodoInterface) => {
  //           return editTodoSuccessAction({ todo });
  //         }),
  //         catchError(() => {
  //           // this.loader.hide();
  //           return of(editTodoFailureAction());
  //         }),
  //       );
  //     }),
  //   ),
  // );

  constructor(
    private actions$: Actions,
    private userStoreSetvice: UserStoreService,
  ) {}
}
