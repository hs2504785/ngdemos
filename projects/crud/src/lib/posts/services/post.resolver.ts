import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostInterface } from '../models/post.interface';
import { POSTS } from './fake-posts';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<any> {
  constructor(private postService: PostService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<PostInterface[]> {
    return this.postService.getAll().pipe(
      catchError(err => {
        console.log(err, 'Feting pos error', err);
        return of(POSTS);
      }),
    );
  }
}
