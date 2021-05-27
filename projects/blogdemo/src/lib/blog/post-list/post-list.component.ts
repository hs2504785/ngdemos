import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { ConfigService } from 'src/app/config.service';
import { Post } from '../types';
import { UserService } from '../user/user.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnDestroy {
  readonly posts: Observable<Post[]>;
  readonly title: Observable<string>;
  private readonly unsubscribe = new Subject<void>();
  selectedPostId: number | undefined;
  userId: number | undefined;

  constructor(
    configService: ConfigService,
    userService: UserService,
    private postService: PostService,
    private router: Router
  ) {
    this.title = configService.title;
    this.posts = userService.currentUserId.pipe(
      tap(userId => (this.userId = userId)),
      switchMap(userId => postService.getPostsByUser(userId))
    );

    postService.currentPostId
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        postId => (this.selectedPostId = postId ? +postId : undefined)
      );
  }

  selectPost(postId: number) {
    const queryParams = { postId };
    void this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge'
    });
    this.selectedPostId = postId;
  }

  createPost() {
    const newPost: Omit<Post, 'id'> = {
      body: 'placeholder body',
      title: 'placeholder title',
      userId: this.userId || 0
    };
    this.postService.createPost(newPost);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
