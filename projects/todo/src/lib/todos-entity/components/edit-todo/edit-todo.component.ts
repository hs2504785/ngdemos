import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../../models/todo.interface';
import { getEntityTodoById } from '../../state/entity-todo.selectors';
import { updateEntityTodo } from '../../state/todo.actions';
import { TodoStateInterface } from '../../state/todo.reducer';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo$: Observable<TodoInterface>;

  constructor(private store: Store<TodoStateInterface>) {}

  ngOnInit(): void {
    this.todo$ = this.store.pipe(select(getEntityTodoById));
  }

  updateTodo(todo: TodoInterface, val: any) {
    const updatedTodo = {
      ...todo,
      ...val,
    };

    this.store.dispatch(
      updateEntityTodo({
        todo: {
          id: updatedTodo.id,
          changes: val,
        },
      }),
    );
    console.log('Update ', updatedTodo);
  }
}
