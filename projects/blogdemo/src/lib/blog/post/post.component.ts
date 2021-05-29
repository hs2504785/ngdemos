import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Post } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import {
  selectCurrentPostId,
  selectCurrentUserId,
} from '../state/router.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$: Observable<Post | undefined>;
  editingTitle = false;
  editingBody = false;
  title = new FormControl();
  body = new FormControl();
  currentUserId$: Observable<number>;

  constructor(
    private router: Router,
    private postService: PostService,
    private userService: UserService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.currentUserId$ = this.store.pipe(select(selectCurrentUserId));
    this.initializeValues();
  }

  initializeValues() {
    const posts$ = this.postService.entities$;
    const currentPostId$ = this.store.pipe(select(selectCurrentPostId));
    const currentPost$ = combineLatest([
      posts$,
      currentPostId$.pipe(filter(postId => !isNaN(postId))),
    ]).pipe(map(([posts, postId]) => posts.find(post => post.id === postId)));

    this.post$ = combineLatest([currentPost$, this.currentUserId$]).pipe(
      map(([post, userId]) =>
        // discard the post if the post is from the wrong user
        userId === post?.userId ? post : undefined,
      ),
      tap(post => {
        if (post) {
          this.title.setValue(post.title);
          this.body.setValue(post.body);
        } else {
          // we didn't find a post, or the post was for the wrong user,
          // so we clear the postId from queryParams after a delay to
          // allow the initial navigation to complete
          setTimeout(() => {
            void this.router.navigate([], {
              queryParams: { postId: undefined },
              queryParamsHandling: 'merge',
            });
          });
        }
      }),
    );
  }

  delete(post: Post) {
    if (window.confirm('Are you sure you want to delete this post?')) {
      this.postService.delete(post);
    }
  }

  setTitle(post: Post) {
    this.editingTitle = false;
    this.postService.update({
      ...post,
      title: this.title.value,
    });
  }

  setBody(post: Post) {
    this.editingBody = false;
    this.postService.update({
      ...post,
      body: this.body.value,
    });
  }
}
