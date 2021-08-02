import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import lagRadar from './services/lagRadar';
import { crazyBusyFunction } from './services/long-running.helper';

const crazyFactor = 1000000;

@Component({
  selector: 'app-long-running',
  templateUrl: './long-running.component.html',
  styleUrls: ['./long-running.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LongRunningComponent implements OnInit {
  @ViewChild('output') output: ElementRef;
  start: any;
  worker;
  constructor() {}

  ngOnInit(): void {
    console.log('here');
    lagRadar();
    this.initWorker();
  }

  initWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(
        new URL('./services/long-running.worker', import.meta.url),
      );
      this.worker.onmessage = ({ data }) => {
        this.setResult('Worker', data, performance.now() - this.start);
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  setResult(from: string, result: number, time: number) {
    this.output.nativeElement.textContent = `
    From ${from}.
    Result: ${result}.
    Time: ${time}`.trim();
  }

  runMainThread() {
    this.output.nativeElement.textContent = 'Wait...';
    this.start = performance.now();
    const result = crazyBusyFunction(crazyFactor);
    this.setResult('Main thread', result, performance.now() - this.start);
  }

  runWorkerThread() {
    this.output.nativeElement.textContent = 'Wait...';
    this.start = performance.now();
    this.worker.postMessage(crazyFactor);
  }
}
