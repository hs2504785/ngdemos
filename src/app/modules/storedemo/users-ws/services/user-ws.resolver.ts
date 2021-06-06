import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { UserWsService } from './user-ws.service';

@Injectable({
  providedIn: 'root',
})
export class UserWsResolver implements Resolve<boolean> {
  constructor(private userService: UserWsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.userService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.userService.getAll();
        }
      }),
      first(),
    );
  }
}
