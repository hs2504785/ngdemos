import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UcardInterface } from '../models/ucard-interface';

@Injectable({
  providedIn: 'root',
})
export class UcardService {
  API_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUcards(): Observable<UcardInterface[]> {
    return this.http.get(`${this.API_URL}`).pipe(map((res: any) => res.data));
  }

  // addTodo(todo: UcardInterface): Observable<UcardInterface> {
  //   return this.http.post<UcardInterface>(`${this.API_URL}`, todo);
  // }

  // updateTodo(todo): Observable<UcardInterface> {
  //   return this.http.put<UcardInterface>(`${this.API_URL}/${todo.id}`, todo);
  // }

  // removeTodo(todoId: number): Observable<any> {
  //   return this.http.delete(`${this.API_URL}/${todoId}`);
  // }
}
