import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushComponent {
  count = 0;
  logChangeDetection() {
    console.log('AppComponent rendered, count now ' + this.count);
    return true;
  }

  changeCount() {
    this.count++;
  }
}
