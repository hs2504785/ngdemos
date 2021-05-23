import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../models/todo.interface';
import { DatabaseService } from './database.service';

@Injectable()
export class TododbService {
  todoCollection;
  constructor(private databaseService: DatabaseService) {
    this.todoCollection = databaseService.db.todo;
  }

  getTodoItems(): Observable<TodoInterface[]> {
    return this.todoCollection.find().$;
  }

  getCompletedTodoItems(): Observable<TodoInterface[]> {
    return this.todoCollection.find().where('completed').eq(true).$;
  }

  async createTodoItem(todo) {
    const newTodo = {
      title: todo.title,
      completed: !!todo.completed,
      id: new Date().getTime().toString(),
    };
    return this.todoCollection.insert(newTodo);
  }

  async removeTodoItem(todo) {
    const query = this.todoCollection.find().where('id').eq(todo.id);
    const removedDocs = await query.remove();
    return removedDocs;
  }

  async updateTodoItem(todo) {
    return await this.todoCollection.upsert(todo);
  }
}
