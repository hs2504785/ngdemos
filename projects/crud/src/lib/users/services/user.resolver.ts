import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): any | Observable<any> | Promise<any> {
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
