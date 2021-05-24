import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadTodos } from '../state/todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    this.store.dispatch(loadTodos());
    return of(true);
  }
}
