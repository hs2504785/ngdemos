import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '../post-list/post.service';
import { Post, User } from '../types';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user$: Observable<User | undefined>;
  posts$: Observable<Post[] | undefined>;

  constructor(userService: UserService, postService: PostService) {
    this.user$ = userService.currentUser;
    this.posts$ = postService.posts;
  }
}
