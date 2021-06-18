import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NUMBER } from './enums/number.enum';
import { CalculationService } from './services/calculator.service';

@Component({
  selector: 'lib-workersample',
  templateUrl: './workersample.component.html',
  styleUrls: ['./workersample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersampleComponent {
  workerTime = null;
  jsTime = null;
  worker;

  constructor(
    private cd: ChangeDetectorRef,
    private service: CalculationService,
  ) {
    this.worker = new Worker(new URL('./workersample.worker', import.meta.url));
    this.worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
  }
  runWorker() {
    console.log('Worker in action');
    const t0 = performance.now();
    this.worker.postMessage(NUMBER.TEN_MILLIONS);
    const t1 = performance.now();
    this.workerTime = t1 - t0;
    this.cd.detectChanges();
  }

  runThread() {
    console.log('JS Thread in action');
    const t0 = performance.now();
    const result = this.service.loop(NUMBER.TEN_MILLIONS);
    const t1 = performance.now();
    this.jsTime = t1 - t0;
    console.log('From Javascript Thread', result);
  }
}
