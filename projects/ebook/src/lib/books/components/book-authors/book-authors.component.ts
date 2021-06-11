import { Component, Input } from '@angular/core';
import { BookInterface } from '../../models/book.interface';

@Component({
  selector: 'lib-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css'],
})
export class BookAuthorsComponent {
  @Input() book!: BookInterface;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
