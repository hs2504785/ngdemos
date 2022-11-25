import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-vsdumb',
  templateUrl: './vsdumb.component.html',
  styleUrls: ['./vsdumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsdumbComponent {
  @Input() photos;
  @Input() isLoading = false;
  @Input() theEnd = false;
  @Output() nextBatchFn: any = new EventEmitter();
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  nextBatch(e, offset) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`At ${e} End is ${end}, '>=Total', ${total} offset ${offset}`);
    if (total === end) {
      this.nextBatchFn.emit(offset);
    }
  }

  trackByIdx(i) {
    return i;
  }
}
