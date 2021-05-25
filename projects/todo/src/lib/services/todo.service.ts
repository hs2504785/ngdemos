import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): any {
    return this.http.get(`${this.API_URL}`);
  }

  addTodo(todo: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(`${this.API_URL}`, todo);
  }

  updateTodo(todo: TodoInterface): Observable<TodoInterface> {
    return this.http.put<TodoInterface>(`${this.API_URL}/${todo.id}`, todo);
  }

  removeTodo(todoId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${todoId}`);
  }
}
