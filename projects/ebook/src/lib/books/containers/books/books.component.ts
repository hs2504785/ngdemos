import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { BookInterface } from '../../models/book.interface';

@Component({
  selector: 'lib-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books$: Observable<BookInterface[]>;

  constructor(private store: Store) {
    // this.books$ = store.select(fromBooks.selectBookCollection);
    this.books$ = of([]);
  }

  ngOnInit() {
    // this.store.dispatch(CollectionPageActions.enter());
  }
}
