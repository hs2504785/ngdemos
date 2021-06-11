import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookInterface } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<BookInterface[]> {
    return this.http
      .get<{ items: BookInterface[] }>(
        `${this.API_PATH}?orderBy=newest&q=${queryTitle}`,
      )
      .pipe(map(books => books.items || []));
  }

  retrieveBook(volumeId: string): Observable<BookInterface> {
    return this.http.get<BookInterface>(`${this.API_PATH}/${volumeId}`);
  }
}
