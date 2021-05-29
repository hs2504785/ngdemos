import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }
}
