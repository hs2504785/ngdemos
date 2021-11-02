import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { UserStoreInterface } from '../../users-store/models/user-store-interface';
import { loadStoreUsers } from '../state/actions/users-store-feature.actions';
import { areUsersLoaded } from '../state/selectors/users-store-feature.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserStoreFeatureResolver implements Resolve<boolean> {
  constructor(private store: Store<UserStoreInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(areUsersLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(loadStoreUsers());
        }
      }),
      filter(loaded => loaded),
      first(),
    );
  }
}
