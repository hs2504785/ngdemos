import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private localeSubject = new BehaviorSubject<string>('en');
  localeStore$ = this.localeSubject.asObservable().pipe(distinctUntilChanged());

  get locale(): string {
    return this.localeSubject.value;
  }

  set locale(lang: string) {
    this.localeSubject.next(lang);
  }
}
