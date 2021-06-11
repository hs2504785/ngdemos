import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './containers/books/books.component';
import { BookComponent } from './ccomponents/book/book.component';
import { FindBookComponent } from './containers/find-book/find-book.component';
import { ViewBookComponent } from './containers/view-book/view-book.component';
import { MatCardModule } from '@angular/material/card';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe';
import { AddCommasPipe } from '../shared/pipes/add-commas.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    FindBookComponent,
    ViewBookComponent,
    BookPreviewListComponent,
    BookAuthorsComponent,
    BookDetailComponent,
    BookSearchComponent,
    BookPreviewComponent,
    EllipsisPipe,
    AddCommasPipe,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class BooksModule {}
