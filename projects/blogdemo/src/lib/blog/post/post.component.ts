import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PostService } from '../post-list/post.service';
import { Post } from '../types';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post$: Observable<Post | undefined>;
  editingTitle = false;
  editingBody = false;
  title = new FormControl();
  body = new FormControl();

  constructor(
    private router: Router,
    private postService: PostService,
    userService: UserService
  ) {
    this.post$ = combineLatest([
      postService.currentPost,
      userService.currentUserId
    ]).pipe(
      map(([post, userId]) =>
        // discard the post if the post is from the wrong user
        userId === post?.userId ? post : undefined
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
              queryParamsHandling: 'merge'
            });
          });
        }
      })
    );
  }

  delete(post: Post) {
    if (
      window.confirm('Are you sure you want to delete this post?')
    ) {
      this.postService.deletePost(post);
    }
  }

  setTitle(post: Post) {
    this.editingTitle = false;
    this.postService.updatePost({
      ...post,
      title: this.title.value
    });
  }

  setBody(post: Post) {
    this.editingBody = false;
    this.postService.updatePost({
      ...post,
      body: this.body.value
    });
  }
}
