import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  photos$: Observable<any[]>;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;

  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  constructor(private dataService: DataService) {
    // const batchMap = this.offset.pipe(
    //   throttleTime(500),
    //   mergeMap(n => this.getBatch(n)),
    //   scan((acc, batch) => {
    //     return { ...acc, ...batch };
    //   }, {})
    // );

    // this.infinite = batchMap.pipe(map(v => Object.values(v)));
  }

  ngOnInit() {
    this.photos$ = this.dataService.getPhotos();
  }

  getBatch(offset) {
    console.log(offset);
    // return this.db
    //   .collection('people', ref =>
    //     ref
    //       .orderBy('name')
    //       .startAfter(offset)
    //       .limit(this.batch)
    //   )
    //   .snapshotChanges()
    //   .pipe(
    //     tap(arr => (arr.length ? null : (this.theEnd = true))),
    //     map(arr => {
    //       return arr.reduce((acc, cur) => {
    //         const id = cur.payload.doc.id;
    //         const data = cur.payload.doc.data();
    //         return { ...acc, [id]: data };
    //       }, {});
    //     })
    //   );
  }

  nextBatch(e, offset) {
    // if (this.theEnd) {
    //   return;
    // }

    // const end = this.viewport.getRenderedRange().end;
    // const total = this.viewport.getDataLength();
    // console.log(`${end}, '>=', ${total}`);
    // if (end === total) {
    //   this.offset.next(offset);
    // }
  }

  trackByIdx(i) {
    return i;
  }
}
