import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimersComponent implements OnInit, AfterViewChecked {
  inZone = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    console.log('Change detection triggered!............................');
  }

  setZone(inZone: boolean) {
    this.inZone = inZone;
  }

  hello() {
    console.log('Hello');
  }
}
