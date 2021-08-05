import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { search } from 'src/app/shared/utils/search.util';

const mockCars = ['Ferrari', 'Ford', 'Porsche', 'Mazda', 'Maserati'];

@Injectable()
export class CarSearchService {
  private carsQuerySubject = new Subject<string>();

  readonly cars$ = this.carsQuerySubject.pipe(
    search(query => this.loadCars(query)),
  );

  constructor() {}

  searchCars(query: string) {
    this.carsQuerySubject.next(query);
  }

  loadCars(query: string): Observable<string[]> {
    return of(mockCars).pipe(
      map(mockCars =>
        mockCars.filter(car =>
          car.toLowerCase().startsWith(query.toLowerCase()),
        ),
      ),
    );
  }
}
