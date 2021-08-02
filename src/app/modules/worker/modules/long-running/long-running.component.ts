import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import lagRadar from './services/lagRadar';
import { LongRunningService } from './services/long-running.service';

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
  constructor(private longRunningService: LongRunningService) {}

  ngOnInit(): void {
    console.log('here');
    lagRadar();
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
    const result = this.longRunningService.crazyBusyFunction(crazyFactor);
    this.setResult('Main thread', result, performance.now() - this.start);
  }

  runWorkerThread() {}
}
