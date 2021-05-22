import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { TodoInterface } from '../models/todo.interface';
import { TodoStore } from './todo-store.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  addTodo(todo: TodoInterface): any {
    this.http.post(`${this.API_URL}`, todo).subscribe();
  }

  updateTodo(todo: TodoInterface): any {
    this.http.put(`${this.API_URL}/${todo.id}`, todo).subscribe();
  }

  removeTodo(todo: TodoInterface): any {
    this.http.delete(`${this.API_URL}/${todo.id}`).subscribe();
  }
}
