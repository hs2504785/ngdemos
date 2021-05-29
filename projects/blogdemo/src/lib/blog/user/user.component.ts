import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post, User } from '../../models/types';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { selectCurrentUserId } from '../state/router.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$: Observable<User | undefined>;
  posts$: Observable<Post[] | undefined>;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private store: Store,
  ) {}

  ngOnInit() {
    const users$ = this.userService.entities$;
    const currentUserId$ = this.store.pipe(select(selectCurrentUserId));
    this.user$ = combineLatest([users$, currentUserId$]).pipe(
      map(([users, userId]) => users.find(post => post.id === userId)),
    );
    this.posts$ = this.postService.entities$;
  }
}
