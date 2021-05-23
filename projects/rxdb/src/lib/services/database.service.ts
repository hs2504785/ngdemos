import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../models/todo.interface';
import { TODO_SCHEMA } from '../schemas/todo.schema';
addRxPlugin(require('pouchdb-adapter-idb'));

import { RxDBValidatePlugin } from 'rxdb/plugins/validate';
addRxPlugin(RxDBValidatePlugin);

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);

import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
addRxPlugin(RxDBUpdatePlugin);

let todoCollection: any;
/**
 * This is run via APP_INITIALIZER in app.module.ts
 * to ensure the database exists before the angular-app starts up
 */
export async function initDatabase() {
  if (todoCollection) {
    return;
  }

  const db = await createRxDatabase({
    name: 'todosdb', // <- name
    adapter: 'idb', // <- storage-adapter
    // password: 'myPassword',     // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    eventReduce: false, // <- eventReduce (optional, default: true)
  });

  (window as any)['db'] = db;

  todoCollection = await window['db'].addCollections({
    todo: {
      schema: TODO_SCHEMA,
    },
  });
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  get db() {
    return window['db'];
  }

  getTodoItems(): Observable<TodoInterface[]> {
    return todoCollection && todoCollection.todo.find().$;
  }

  async createTodoItem(todo) {
    const newTodo = {
      title: todo.title,
      completed: !!todo.completed,
      id: new Date().getTime().toString(),
    };
    return todoCollection.todo.insert(newTodo);
  }

  async removeTodoItem(todo) {
    const query = todoCollection.todo.find().where('id').eq(todo.id);
    const removedDocs = await query.remove();
    return removedDocs;
  }

  async updateTodoItem(todo) {
    return await todoCollection.todo.upsert(todo);
  }
}
