import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import $ from 'jquery';
import 'spectrum-colorpicker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit, AfterViewInit {
  @Output() change = new EventEmitter<string>();
  @ViewChild('picker') colorPickerEl: ElementRef;

  ngOnInit() {
    console.log('PAPA.......................................', $);
  }

  ngAfterViewInit() {
    (<any>$(this.colorPickerEl.nativeElement)).spectrum({
      change: c => {
        this.change.emit(c.toHexString());
      },
    });
  }
}
