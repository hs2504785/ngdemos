import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookInterface } from '../../models/book.interface';
import { addBook, removeBook } from '../../state/books.actions';
import {
  isSelectedBookInCollection,
  selectSelectedBook,
} from '../../state/books.selectors';

@Component({
  selector: 'lib-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.scss'],
})
export class SelectedBookComponent {
  book$: Observable<BookInterface>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store) {
    this.book$ = store.select(selectSelectedBook) as Observable<BookInterface>;
    this.isSelectedBookInCollection$ = store.select(isSelectedBookInCollection);
  }

  addToCollection(book: BookInterface) {
    this.store.dispatch(addBook({ book }));
  }

  removeFromCollection(book: BookInterface) {
    this.store.dispatch(removeBook({ book }));
  }
}
