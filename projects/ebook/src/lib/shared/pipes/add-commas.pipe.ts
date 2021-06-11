import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCommas',
})
export class AddCommasPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
