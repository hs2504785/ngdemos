import { Component } from '@angular/core';
import { PostInterface } from 'projects/crud/src/lib/posts/models/post.interface';
import { PostService } from 'projects/crud/src/lib/posts/services/post.service';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts$: Observable<PostInterface[]>;
  sub: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts();
  }
}
