import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Post } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnDestroy {
  readonly posts: Observable<Post[]>;
  readonly title: Observable<string>;
  private readonly unsubscribe = new Subject<void>();
  selectedPostId: number | undefined;
  userId: number | undefined;

  constructor(
    userService: UserService,
    private postService: PostService,
    private router: Router,
  ) {
    // this.posts = this.postService.posts;
    this.posts = userService.currentUserId.pipe(
      tap(user => (this.userId = user.id)),
      switchMap(user => postService.getPostsByUser(user.id)),
    );

    // postService.currentPostId
    //   .pipe(takeUntil(this.unsubscribe))
    //   .subscribe(
    //     postId => (this.selectedPostId = postId ? +postId : undefined),
    //   );
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
    // this.postService.createPost(newPost);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
