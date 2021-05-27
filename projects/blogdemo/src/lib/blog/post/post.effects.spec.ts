import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { of, Subject, throwError } from 'rxjs';

import { PostLoaderService } from '../post-list/post-loader.service';
import { Post } from '../types';
import { mockPosts } from './mock.posts';
import * as PostActions from './post.actions';
import { PostEffects } from './post.effects';

describe('PostEffects', () => {
  let actions$: Subject<Action>;
  let effects: PostEffects;
  let postLoaderMock: jasmine.SpyObj<PostLoaderService>;

  beforeEach(() => {
    actions$ = new Subject<Action>();
    postLoaderMock = jasmine.createSpyObj<PostLoaderService>([
      'load',
      'create',
      'delete',
      'update'
    ]);

    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        provideMockActions(() => actions$),
        { provide: PostLoaderService, useValue: postLoaderMock }
      ]
    });

    effects = TestBed.inject(PostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadPosts', () => {
    it('can load posts', () => {
      postLoaderMock.load.and.returnValue(of(mockPosts));
      effects.loadPosts$.subscribe(a => {
        expect(a.type).toEqual(PostActions.loadPostsSuccess.type);
        expect(a['posts']).toBe(mockPosts);
      });
      actions$.next(PostActions.loadPosts());
    });

    it('can handle post loading failing', () => {
      postLoaderMock.load.and.returnValue(throwError('oops'));
      effects.loadPosts$.subscribe(a => {
        expect(a.type).toEqual(PostActions.loadPostsFailure.type);
        expect(a['error']).toBe('oops');
      });
      actions$.next(PostActions.loadPosts());
    });
  });

  describe('createPost', () => {
    let newPost: Omit<Post, 'id'>;

    beforeEach(() => {
      newPost = {
        userId: 3,
        title: 'titleNew',
        body: 'bodyNew'
      };
    });

    it('can create a post', () => {
      const newPostWithId = {
        ...newPost,
        id: 4
      };

      postLoaderMock.create.and.returnValue(of(newPostWithId));
      effects.createPost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.createPostSuccess.type);
        expect(a['post']).toBe(newPostWithId);
      });
      actions$.next(PostActions.createPost({ post: newPost }));
    });

    it('can handle post creation failing', () => {
      postLoaderMock.create.and.returnValue(throwError('oops'));
      effects.createPost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.createPostFailure.type);
        expect(a['error']).toBe('oops');
      });
      actions$.next(PostActions.createPost({ post: newPost }));
    });
  });

  describe('deletePost', () => {
    it('can delete a post', () => {
      postLoaderMock.delete.and.returnValue(of({}));
      effects.deletePost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.deletePostSuccess.type);
        expect(a['postId']).toBe(2);
      });
      actions$.next(PostActions.deletePost({ postId: 2 }));
    });

    it('can handle post deletion failing', () => {
      postLoaderMock.delete.and.returnValue(throwError('oops'));
      effects.deletePost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.deletePostFailure.type);
        expect(a['error']).toBe('oops');
      });
      actions$.next(PostActions.deletePost({ postId: 2 }));
    });
  });

  describe('updatePost', () => {
    let updatedPost: Post;

    beforeEach(() => {
      updatedPost = { ...mockPosts[2], title: 'changedTitle' };
    });

    it('can update a post', () => {
      postLoaderMock.update.and.returnValue(of(updatedPost));
      effects.updatePost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.updatePostSuccess.type);
        expect(a['post']).toBe(updatedPost);
      });
      actions$.next(
        PostActions.updatePost({
          post: updatedPost
        })
      );
    });

    it('can handle post update failing', () => {
      postLoaderMock.update.and.returnValue(throwError('oops'));
      effects.updatePost$.subscribe(a => {
        expect(a.type).toEqual(PostActions.updatePostFailure.type);
        expect(a['error']).toBe('oops');
      });
      actions$.next(
        PostActions.updatePost({
          post: updatedPost
        })
      );
    });
  });
});
