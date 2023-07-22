import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RxjsCounterService {
  count$ = new BehaviorSubject(1000);
  increment() {
    this.count$.next(this.count$.value + 1);
  }

  double$ = this.count$.pipe(
    map(count => {
      console.log('Double: ', count * 2);

      return count * 2;
    }),
  );
  triple$ = this.count$.pipe(
    map(count => {
      console.log('Triple: ', count * 3);

      return count * 3;
    }),
  );
  combined$ = combineLatest([this.double$, this.triple$]).pipe(
    map(([double, triple]) => {
      console.log('Combined: ', double * triple);

      return double * triple;
    }),
  );
  over9000$ = this.combined$.pipe(
    map(combined => {
      console.log('Over9000: ', combined > 9000);
      return combined > 9000;
    }),
  );
  message$ = this.over9000$.pipe(
    map(over9000 => {
      const msg = over9000 ? `its over 9000` : 'its under 9000';
      console.log('Message ', msg);
      return msg;
    }),
  );
}
