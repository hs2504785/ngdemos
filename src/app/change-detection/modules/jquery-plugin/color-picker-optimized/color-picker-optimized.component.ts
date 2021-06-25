import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import $ from 'jquery';
import 'spectrum-colorpicker';

@Component({
  selector: 'app-color-picker-optimized',
  templateUrl: './color-picker-optimized.component.html',
  styleUrls: ['./color-picker-optimized.component.css'],
})
export class ColorPickerOptimizedComponent implements OnInit, AfterViewInit {
  @Output() change = new EventEmitter<string>();
  @ViewChild('picker') colorPickerEl: ElementRef;

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      (<any>$(this.colorPickerEl.nativeElement)).spectrum({
        change: c => {
          this.ngZone.run(() => {
            this.change.emit(c.toHexString());
            this.cd.detectChanges();
          });
        },
      });
    });
  }
}
