import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs/operators';

export function search<T, R>(
  dataCb: (query: string) => Observable<R>,
  delay = 250,
) {
  return (source$: Observable<T>) =>
    source$.pipe(
      debounceTime(delay),
      distinctUntilChanged(),
      startWith(''),
      switchMap(dataCb),
    );
}
