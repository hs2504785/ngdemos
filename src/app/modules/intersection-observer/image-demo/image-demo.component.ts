import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IntersectionStatus } from 'src/app/shared/directives/intersection-observer/from-intersection-observer';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-image-demo',
  templateUrl: './image-demo.component.html',
  styleUrls: ['./image-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDemoComponent implements OnInit {
  visibilityStatus: { [key: string]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;
  photos$: Observable<any[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.photos$ = this.dataService.getPhotos();
  }

  onVisibilityChanged(index: string, status: IntersectionStatus) {
    console.log('HER', index);
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number, item) {
    return item.id;
  }
}
