import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
  }

  deletePost(post) {
    console.log('Delete', post);

    // this.sub = this.postService.delete(post.id).subscribe(() => {
    //   this.posts = this.posts.filter(item => item.id !== post.id);
    //   this.cd.detectChanges();
    // });
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
