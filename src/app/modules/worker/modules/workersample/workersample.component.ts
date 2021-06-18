import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-workersample',
  templateUrl: './workersample.component.html',
  styleUrls: ['./workersample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./workersample.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello Hemant');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
