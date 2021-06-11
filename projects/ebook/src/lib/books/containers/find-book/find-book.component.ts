import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookInterface } from '../../models/book.interface';

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
    // this.searchQuery$ = store.select(fromBooks.selectSearchQuery).pipe(take(1));
    // this.books$ = store.select(fromBooks.selectSearchResults);
    // this.loading$ = store.select(fromBooks.selectSearchLoading);
    // this.error$ = store.select(fromBooks.selectSearchError);
  }

  search(query: string) {
    // this.store.dispatch(FindBookPageActions.searchBooks({ query }));
  }
}
