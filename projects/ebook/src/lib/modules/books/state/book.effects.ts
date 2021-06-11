import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { BookInterface } from '../models/book.interface';
import { GoogleBooksService } from '../services/google-books.service';
import { searchBooks, searchFailure, searchSuccess } from './books.actions';

@Injectable()
export class BookEffects {
  search$ = createEffect(
    () =>
      ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
        this.actions$.pipe(
          ofType(searchBooks),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (query === '') {
              return empty;
            }

            const nextSearch$ = this.actions$.pipe(
              ofType(searchBooks),
              skip(1),
            );

            return this.googleBooks.searchBooks(query).pipe(
              takeUntil(nextSearch$),
              map((books: BookInterface[]) => {
                console.log('PP', books);
                return searchSuccess({ books });
              }),
              catchError(err => of(searchFailure({ errorMsg: err.message }))),
            );
          }),
        ),
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService,
  ) {}
}
