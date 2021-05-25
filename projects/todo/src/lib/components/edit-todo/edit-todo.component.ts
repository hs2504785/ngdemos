import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoStateInterface } from '../../models/todo-state.interface';
import { TodoInterface } from '../../models/todo.interface';
import { editTodoAction } from '../../state/todo.actions';
import { getTodoById, selectRouteParams } from '../../state/todo.selectors';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo$: Observable<any>;

  constructor(private store: Store<TodoStateInterface>) {}

  ngOnInit(): void {
    this.todo$ = this.store.pipe(select(getTodoById));
  }

  updateTodo(todo: TodoInterface, val: any) {
    this.store.dispatch(editTodoAction({ todo: { ...todo, ...val } }));
  }
}
