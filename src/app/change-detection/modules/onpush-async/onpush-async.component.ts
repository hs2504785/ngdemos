import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onpush-async',
  templateUrl: './onpush-async.component.html',
  styleUrls: ['./onpush-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushAsyncComponent {
  count = 0;
  logChangeDetection() {
    console.log('AppComponent rendered, count now ' + this.count);
    return true;
  }

  changeCount() {
    this.count++;
  }
}
