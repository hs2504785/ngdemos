import { Component } from '@angular/core';

@Component({
  selector: 'app-default-onpush',
  templateUrl: './default-onpush.component.html',
  styleUrls: ['./default-onpush.component.scss'],
})
export class DefaultOnpushComponent {
  count = 0;
  logChangeDetection() {
    console.log('AppComponent rendered, count now ' + this.count);
    return true;
  }

  changeCount() {
    this.count++;
  }
}
