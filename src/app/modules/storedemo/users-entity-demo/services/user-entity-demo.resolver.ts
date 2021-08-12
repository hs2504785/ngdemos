import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { UserEntityDemoInterface } from '../models/user-entity-demo-interface';
import { loadEntityDemoUsers } from '../state/user-entity-demo.actions';
import { areEntityDemoUsersLoaded } from '../state/user-entity-demo.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserEntityDemoResolver implements Resolve<boolean> {
  constructor(private store: Store<UserEntityDemoInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(areEntityDemoUsersLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(loadEntityDemoUsers());
        }
      }),
      filter(loaded => loaded),
      first(),
    );
  }
}
