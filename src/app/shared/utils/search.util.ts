import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
/***
 * 1. Result relenence
 * 2. Reduce number of request
 * 3. Avoid duplicate request
 * 4. Cancel previous pending request
 * 5. Start with '' or filter ( use one )
 */
export function search<T, R>(
  dataCb: (query: string) => Observable<R>,
  delay = 250,
) {
  return (source$: Observable<T>) =>
    source$.pipe(
      filter((q: any) => !q || q?.length > 2),
      tap(res => console.log('ppp', res)),
      debounceTime(delay),
      distinctUntilChanged(),
      // startWith(''),
      switchMap(dataCb),
    );
}
