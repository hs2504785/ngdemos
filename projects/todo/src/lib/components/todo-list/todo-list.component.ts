import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../models/todo.interface';
import { deleteTodoAction } from '../../state/todo.actions';
import { selectTodos } from '../../state/todo.selectors';

@Component({
  selector: 'lib-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectTodos));
    // Dummy
    // this.todos$ = of([
    //   {
    //     userId: 1,
    //     id: 1,
    //     title: 'delectus aut autem',
    //     completed: false,
    //   },
    //   {
    //     userId: 1,
    //     id: 2,
    //     title: 'quis ut nam facilis et officia qui',
    //     completed: false,
    //   },
    //   {
    //     userId: 1,
    //     id: 3,
    //     title: 'fugiat veniam minus',
    //     completed: false,
    //   },
    // ]);
  }

  removeTodo(todo: TodoInterface) {
    this.store.dispatch(deleteTodoAction({ todoId: todo.id }));
  }
}
