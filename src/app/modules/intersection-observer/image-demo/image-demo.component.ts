import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-image-demo',
  templateUrl: './image-demo.component.html',
  styleUrls: ['./image-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDemoComponent implements OnInit {
  photos$: Observable<any[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.photos$ = this.dataService.getPhotos();
  }
}
