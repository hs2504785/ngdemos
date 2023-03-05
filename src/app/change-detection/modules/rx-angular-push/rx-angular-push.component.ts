import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rx-angular-push',
  templateUrl: './rx-angular-push.component.html',
  styleUrls: ['./rx-angular-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxAngularPushComponent {
  count = 0;
  logChangeDetection() {
    console.log('AppComponent rendered, count now ' + this.count);
    return true;
  }

  changeCount() {
    this.count++;
  }
}
