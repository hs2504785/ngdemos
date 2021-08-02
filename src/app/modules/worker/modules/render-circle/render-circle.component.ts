import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-render-circle',
  templateUrl: './render-circle.component.html',
  styleUrls: ['./render-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderCircleComponent implements OnInit {
  title = 'NgWebWorker';
  longProcessOutput: string = 'Long\nprocess\noutput\nwill\nappear\nhere\n';
  worker: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initWorker();
  }

  initWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(
        new URL('./services/circle.worker', import.meta.url),
      );
      this.worker.onmessage = ({ data }) => {
        this.longProcessOutput += `${data}` + '\n';
        this.cd.detectChanges();
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  longLoop() {
    this.longProcessOutput = '';
    // the following line starts the long process on the Web Worker
    // by sending a message to the Web Worker
    this.worker.postMessage('start looping...');
  }
}
