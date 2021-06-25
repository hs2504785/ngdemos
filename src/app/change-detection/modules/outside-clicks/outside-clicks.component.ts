import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-outside-clicks',
  templateUrl: './outside-clicks.component.html',
  styleUrls: ['./outside-clicks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutsideClicksComponent implements OnInit, AfterViewChecked {
  displayOptimized = false;

  constructor() {}

  ngOnInit() {}

  showOptimized() {
    this.displayOptimized = true;
  }

  showRegular() {
    this.displayOptimized = false;
  }

  ngAfterViewChecked() {
    console.log('Change detection triggered!..............................');
  }

  hello() {
    console.log('Hello');
  }
}
