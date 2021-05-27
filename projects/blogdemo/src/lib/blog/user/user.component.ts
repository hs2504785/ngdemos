import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user$: Observable<User | undefined>;
  posts$: Observable<Post[] | undefined>;

  constructor(
    private userService: UserService,
    private postService: PostService,
  ) {
    this.user$ = this.userService.currentUser;
    this.posts$ = this.postService.posts;
  }
}
