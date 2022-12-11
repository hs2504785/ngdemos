import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './containers/books/books.component';
import { FindBookComponent } from './containers/find-book/find-book.component';
import { ViewBookComponent } from './containers/view-book/view-book.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { EllipsisPipe } from '../../shared/pipes/ellipsis.pipe';
import { AddCommasPipe } from '../../shared/pipes/add-commas.pipe';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { StoreModule } from '@ngrx/store';
import {
  booksReducerStore,
  booksRootFeatureKey,
} from './state/books-root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book.effects';
import { SelectedBookComponent } from './containers/selected-book/selected-book.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [
    BooksComponent,
    FindBookComponent,
    ViewBookComponent,
    BookPreviewListComponent,
    BookAuthorsComponent,
    BookDetailComponent,
    BookSearchComponent,
    BookPreviewComponent,
    EllipsisPipe,
    AddCommasPipe,
    SelectedBookComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature(booksRootFeatureKey, booksReducerStore),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BooksModule {}
