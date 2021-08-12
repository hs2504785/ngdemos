import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { UserCs, UserCsInterfaceState } from '../models/user-cs-interface';
import { UsersCsService } from './users-cs.service';

@Injectable()
export class UserCsStore extends ComponentStore<UserCsInterfaceState> {
  readonly users$: Observable<UserCs[]> = this.select(state => state.users);
  readonly selectedUserId$ = this.select(state => state.selectdUserId);
  readonly usersCount$: Observable<number> = this.select(
    this.users$,
    users => users.length,
  );
  readonly userById$: Observable<UserCs> = this.select(
    this.users$,
    this.selectedUserId$,
    (users, selectedUserId) => {
      return users.find(item => item.id === selectedUserId);
    },
  );

  constructor(
    private userCsService: UsersCsService,
    private route: ActivatedRoute,
  ) {
    super({ users: [], selectdUserId: 1 });
  }

  // Each new call of getMovie(id) pushed that id into movieId$ stream.
  readonly getUsers = this.effect(trigger$ => {
    return trigger$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(() =>
        this.userCsService.getUsers().pipe(
          //👇 Act on the result within inner pipe.
          tap({
            next: users => this.setUsers(users),
            error: e => this.logError(e),
          }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  readonly addUser = this.effect((user$: Observable<UserCs>) => {
    return user$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(user =>
        this.userCsService.addUser(user).pipe(
          //👇 Act on the result within inner pipe.
          tap({
            next: u => this.addUserInStore(u),
            error: e => this.logError(e),
          }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  readonly updateUser = this.effect((user$: Observable<UserCs>) => {
    return user$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(user =>
        this.userCsService.updateUser(user).pipe(
          //👇 Act on the result within inner pipe.
          tap({
            next: u => this.updateUserInStore(u),
            error: e => this.logError(e),
          }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  readonly removeUser = this.effect((userId$: Observable<string>) => {
    return userId$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(userId =>
        this.userCsService.removeUser(+userId).pipe(
          //👇 Act on the result within inner pipe.
          tap({
            next: u => this.removeUserFromStore(userId),
            error: e => this.logError(e),
          }),
          // 👇 Handle potential error within inner pipe.
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  logError(err) {
    console.log('Errr', err);
  }

  readonly setUsers = this.updater((state, users: UserCs[]) => ({
    ...state,
    users: [...state.users, ...users],
  }));

  readonly addUserInStore = this.updater((state, user: UserCs) => ({
    ...state,
    users: [user, ...state.users],
  }));

  readonly removeUserFromStore = this.updater((state, userId: string) => ({
    ...state,
    users: state.users.filter(item => item.id !== +userId),
  }));

  readonly updateUserInStore = this.updater((state, user: UserCs) => ({
    ...state,
    users: state.users.map(item => {
      if (item.id === user.id) {
        return user;
      }
      return item;
    }),
  }));
}
