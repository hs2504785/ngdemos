import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostInterface } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'lib-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  post$: Observable<PostInterface>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    const currentPostId = this.route.snapshot.paramMap.get('id');
    this.post$ = this.postService.getPostByIdFromCache(currentPostId);
  }
}
