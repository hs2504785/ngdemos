import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignalCounterService {
  count = signal(1000);
  increment() {
    this.count.update(count => count + 1);
  }

  double = computed(() => {
    console.log('Double: ', this.count() * 2);

    return this.count() * 2;
  });
  triple = computed(() => {
    console.log('Triple: ', this.count() * 3);

    return this.count() * 3;
  });
  combined = computed(() => {
    console.log('Combined: ', this.double() * this.triple());

    return this.double() * this.triple();
  });
  over9000 = computed(() => {
    console.log('Over9000: ', this.combined() > 9000);

    return this.combined() > 9000;
  });
  message = computed(() => {
    const msg = this.over9000() ? `its over 9000` : 'its under 9000';
    console.log('Message ', msg);
    return msg;
  });
}
