import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
    // this.getAll();
  }

  // users = this.entities$;
  // currentUserId = this.store.pipe(select(selectCurrentUserId));
  // currentUser = combineLatest([this.users, this.currentUserId]).pipe(
  //   map(([users, userId]) => users.find(post => post.id === userId)),
  // );

  // getAll(): Observable<any> {
  //   return this.dsHelperService.getDataSources();
  // }

  // add(book): Observable<Book> {
  //   return this.http
  //     .post(`${this.BASE_URL}`, book)
  //     .pipe(map((res: any) => res));
  // }

  // update(book): Observable<Book> {
  //   return this.http
  //     .put(`${this.BASE_URL}/${book.id}`, book.changes)
  //     .pipe(map((res: any) => res));
  // }

  // delete(bookId) {
  //   return this.http
  //     .delete(this.BASE_URL + bookId)
  //     .pipe(map((res: any) => res));
  // }
}
