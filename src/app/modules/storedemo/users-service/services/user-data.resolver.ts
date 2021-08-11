import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDataInterface } from '../models/user-data-interface';
import { UserService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataResolver implements Resolve<UserDataInterface[]> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<UserDataInterface[]> {
    return this.userService.getUsers();
  }
}
