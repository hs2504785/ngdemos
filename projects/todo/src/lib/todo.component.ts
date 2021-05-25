import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoInterface } from './models/todo.interface';
import { selectTodos } from './state/todo.selectors';

@Component({
  selector: 'lib-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
      .add-todo {
        display: flex;
        align-self: center;
      }

      .todo {
        flex: 1;
      }

      .ti-trash {
        cursor: pointer;
      }
    `,
  ],
})
export class TodoComponent implements OnInit {
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

  removeTodo(todo: TodoInterface) {}
}
