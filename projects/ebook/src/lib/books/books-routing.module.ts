import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './containers/books/books.component';
import { FindBookComponent } from './containers/find-book/find-book.component';
import { ViewBookComponent } from './containers/view-book/view-book.component';

export const routes: Routes = [
  {
    path: 'find',
    component: FindBookComponent,
    data: { title: 'Find book' },
  },
  {
    path: ':id',
    component: ViewBookComponent,
    // canActivate: [BookExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: '',
    component: BooksComponent,
    data: { title: 'Book Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
