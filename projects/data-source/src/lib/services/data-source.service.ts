import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSourceService extends DefaultDataService<any> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('DataSource', http, httpUrlGenerator);
  }

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
