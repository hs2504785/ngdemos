import { mergeMap, map, first, tap } from 'rxjs/operators';
import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class BlogResolver implements Resolve<boolean> {
  constructor(
    private userService: UserService,
    private postService: PostService,
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.postService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.userService.getAll();
          this.postService.getAll();
        }
      }),
      first(),
    );
  }
}
