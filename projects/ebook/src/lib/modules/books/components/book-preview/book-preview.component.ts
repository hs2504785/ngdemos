import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookInterface } from '../../models/book.interface';

@Component({
  selector: 'lib-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPreviewComponent {
  @Input() book!: BookInterface;

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        '',
      );
    }

    return false;
  }
}
