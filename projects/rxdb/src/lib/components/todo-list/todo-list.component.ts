import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { TodoInterface } from '../../models/todo.interface';
import { DatabaseService } from '../../services/database.service';
import { TodoStore } from '../../services/todo-store.service';

@Component({
  selector: 'lib-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  selectedTodo: TodoInterface;
  constructor(
    private store: TodoStore,
    private databaseService: DatabaseService,
  ) {}

  ngOnInit(): void {
    // this.todos$ = this.store.todos$;
    this.todos$ = this.databaseService.getTodoItems();
  }

  onTodoAdd(todo: TodoInterface) {
    // this.todos$;
  }

  onTodoEdit(todo: TodoInterface) {
    //
  }

  removeTodo(todo: TodoInterface) {
    // this.store.removeTodo(todo);
    this.databaseService.removeTodoItem(todo);
  }
}
