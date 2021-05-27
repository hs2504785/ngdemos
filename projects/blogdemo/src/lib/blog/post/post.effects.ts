import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  OnInitEffects
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { PostLoaderService } from '../post-list/post-loader.service';
import * as PostActions from './post.actions';

@Injectable()
export class PostEffects implements OnInitEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts),
      concatMap(() =>
        this.postLoaderService.load().pipe(
          map(posts => PostActions.loadPostsSuccess({ posts })),
          catchError(error =>
            of(PostActions.loadPostsFailure({ error }))
          )
        )
      )
    );
  });

  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.createPost),
      concatMap(action =>
        this.postLoaderService.create(action.post).pipe(
          map(post => PostActions.createPostSuccess({ post })),
          catchError(error =>
            of(PostActions.createPostFailure({ error }))
          )
        )
      )
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.deletePost),
      concatMap(action =>
        this.postLoaderService.delete(action.post).pipe(
          map(() =>
            PostActions.deletePostSuccess({ postId: action.post.id })
          ),
          catchError(error =>
            of(PostActions.deletePostFailure({ error }))
          )
        )
      )
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.updatePost),
      concatMap(action =>
        this.postLoaderService.update(action.post).pipe(
          map(() =>
            PostActions.updatePostSuccess({ post: action.post })
          ),
          catchError(error =>
            of(PostActions.updatePostFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private postLoaderService: PostLoaderService
  ) {}

  ngrxOnInitEffects(): Action {
    return PostActions.loadPosts();
  }
}
