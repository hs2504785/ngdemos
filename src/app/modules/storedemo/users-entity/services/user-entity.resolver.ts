import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { UserEntityInterface } from '../models/user-entity-interface';
import { loadEntityUsers } from '../state/user-entity.actions';
import { areEntityUsersLoaded } from '../state/user-entity.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserEntityResolver implements Resolve<boolean> {
  constructor(private store: Store<UserEntityInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(areEntityUsersLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(loadEntityUsers());
        }
      }),
      filter(loaded => loaded),
      first(),
    );
  }
}
