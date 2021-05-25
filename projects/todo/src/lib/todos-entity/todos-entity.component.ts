import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoInterface } from '../models/todo.interface';
import { deleteTodoAction } from '../state/todo.actions';
import { selectEntityTodos } from './state/entity-todo.selectors';

@Component({
  selector: 'lib-todos-entity',
  templateUrl: './todos-entity.component.html',
  styleUrls: ['./todos-entity.component.scss'],
})
export class TodosEntityComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectEntityTodos));
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
