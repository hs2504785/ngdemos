import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Post } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import {
  selectCurrentPostId,
  selectCurrentUserId,
} from '../state/router.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Observable<Post[]>;
  readonly title: Observable<string>;
  private readonly unsubscribe = new Subject<void>();
  selectedPostId: number | undefined;
  userId: number | undefined;
  currentUserId$: Observable<number>;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit() {
    this.currentUserId$ = this.store.pipe(select(selectCurrentUserId));
    this.initializevalues();
  }

  initializevalues() {
    this.posts = this.currentUserId$.pipe(
      tap(userId => (this.userId = userId)),
      switchMap(userId => this.postService.getPostsByUser(userId)),
    );

    this.store
      .pipe(select(selectCurrentPostId))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        postId => (this.selectedPostId = postId ? +postId : undefined),
      );
  }

  selectPost(postId: number) {
    const queryParams = { postId };
    void this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
    this.selectedPostId = postId;
  }

  createPost() {
    const newPost: Omit<Post, 'id'> = {
      body: 'placeholder body',
      title: 'placeholder title',
      userId: this.userId || 0,
    };
    this.postService.add(newPost);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
