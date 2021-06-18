import { Injectable } from '@angular/core';
import { NUMBER } from '../enums/number.enum';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}
  createElement(num: NUMBER) {
    return [...Array(num).keys()];
  }

  loop(n) {
    let i = 0;
    const arr = [];
    for (i; i < n; i++) {
      arr.push(i);
    }

    return arr;
  }
}
