import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { loadTodos } from '../state/todo.actions';
import { areTodosLoaded } from '../state/todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.store.pipe(
      select(areTodosLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(loadTodos());
        }
      }),
      filter(loaded => loaded),
      first(),
    );
  }
}
