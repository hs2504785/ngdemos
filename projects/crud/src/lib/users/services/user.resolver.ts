import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { USERS } from './fake-users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<any> {
  constructor(private postService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): any | Observable<any> | Promise<any> {
    // return this.postService.loaded$.pipe(
    //   tap(loaded => {
    //     if (!loaded) {
    //       this.postService.getAll();
    //     }
    //   }),
    //   first(),
    // );
    return of(USERS);
  }
}
