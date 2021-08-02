import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LongRunningService {
  constructor() {}

  crazyBusyFunction(num: number) {
    let res;
    for (var i = 0; i <= num; i += 0.1) {
      res = performance.now();
    }
    return res;
  }
}
