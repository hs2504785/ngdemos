import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'lib-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();
}
