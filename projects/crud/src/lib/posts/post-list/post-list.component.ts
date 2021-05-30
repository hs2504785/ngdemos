import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { PostInterface } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'lib-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit, OnDestroy {
  posts$: Observable<PostInterface[]>;
  sub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
  }

  deletePost(post) {
    console.log('Delete', post);
    this.postService.delete(post);
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
