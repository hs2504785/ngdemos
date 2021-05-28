import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { deletePost, updatePost } from '../post-list/state/post.actions';
import { PostStateInterface } from '../post-list/state/post.reducer';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post$: Observable<Post | undefined>;
  editingTitle = false;
  editingBody = false;
  title = new FormControl();
  body = new FormControl();
  constructor(
    private router: Router,
    private store: Store,
    private postService: PostService,
    userService: UserService,
  ) {
    this.post$ = combineLatest([
      postService.currentPost,
      userService.currentUserId,
    ]).pipe(
      map(([post, user]) =>
        // discard the post if the post is from the wrong user
        user.id === post?.userId ? post : undefined,
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
      this.store.dispatch(deletePost({ post }));
    }
  }
  setTitle(post: Post) {
    this.editingTitle = false;
    this.store.dispatch(
      updatePost({
        post: {
          ...post,
          title: this.title.value,
        },
      }),
    );
  }
  setBody(post: Post) {
    this.editingBody = false;
    this.store.dispatch(
      updatePost({
        post: {
          ...post,
          title: this.title.value,
        },
      }),
    );
  }
}
