import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilChanged,
  mergeMap,
  Observable,
  scan,
  tap,
  throttleTime,
} from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-vs',
  templateUrl: './vs.component.html',
  styleUrls: ['./vs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsComponent implements OnInit {
  photos$: Observable<any[]>;

  batch = 20;
  theEnd = false;
  isLoading = false;

  offset = new BehaviorSubject(null);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.photos$ = this.offset.pipe(
      tap(() => (this.isLoading = true)),
      throttleTime(500),
      distinctUntilChanged(),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch: any) => {
        return [...acc, ...batch];
      }, []),
    );
  }

  getBatch(offset) {
    return this.dataService.getPhotosNextBatch(offset).pipe(
      tap((arr: any) => {
        this.isLoading = false;
        if (arr.length < 20) {
          this.theEnd = true;
        }
      }),
    );
  }

  nextBatch(offset) {
    this.offset.next(offset);
  }
}
