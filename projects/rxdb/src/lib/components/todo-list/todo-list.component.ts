import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { TodoInterface } from '../../models/todo.interface';
import { TodoStore } from '../../services/todo-store.service';

@Component({
  selector: 'lib-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  selectedTodo: TodoInterface;
  constructor(private store: TodoStore) {}

  ngOnInit(): void {
    this.todos$ = this.store.todos$;
  }

  onTodoAdd(todo: TodoInterface) {
    // this.todos$;
  }

  onTodoEdit(todo: TodoInterface) {
    //
  }

  removeTodo(todo: TodoInterface) {
    this.store.removeTodo(todo);
  }
}
