import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { BookInterface } from '../../models/book.interface';
import { searchBooks } from '../../state/books.actions';
import {
  selectSearchError,
  selectSearchLoading,
  selectSearchQuery,
  selectSearchResults,
} from '../../state/books.selectors';

@Component({
  selector: 'lib-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css'],
})
export class FindBookComponent {
  searchQuery$: Observable<string>;
  books$: Observable<BookInterface[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store) {
    this.searchQuery$ = store.select(selectSearchQuery).pipe(take(1));
    this.books$ = store.select(selectSearchResults);
    this.loading$ = store.select(selectSearchLoading);
    this.error$ = store.select(selectSearchError);
  }

  search(query: string) {
    this.store.dispatch(searchBooks({ query }));
  }
}
