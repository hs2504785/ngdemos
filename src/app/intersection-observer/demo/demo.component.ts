import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntersectionStatus } from 'src/app/shared/directives/from-intersection-observer';
import { IntrDataService } from '../services/intr-data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  visibilityStatus: {[key: string]: IntersectionStatus} = {};
  intersectionStatus = IntersectionStatus;

  todos$: Observable<any[]>;
  posts$: Observable<any[]>;
  comments$: Observable<any[]>;
  albums$: Observable<any[]>;
  photos$: Observable<any[]>;
  users$: Observable<any[]>;
  constructor(private intrDataService: IntrDataService) { }

  ngOnInit(): void {
    this.todos$ = this.intrDataService.getTodos();
    this.posts$ = this.intrDataService.getPosts();
    this.comments$ = this.intrDataService.getComments();
    this.albums$ = this.intrDataService.getAlbums();
    this.photos$ = this.intrDataService.getPhotos();
    this.users$ = this.intrDataService.getUsers();
  }

  onVisibilityChanged(index: string, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }
}
