import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BookInterface } from '../../models/book.interface';

@Component({
  selector: 'lib-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPreviewListComponent implements OnInit {
  @Input() books!: BookInterface[];
  constructor() {}

  ngOnInit(): void {}
}
