import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoStateInterface } from '../../models/todo-state.interface';
import { TodoInterface } from '../../models/todo.interface';
import { editTodoAction } from '../../state/todo.actions';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo: TodoInterface = {
    title: 'ok',
    completed: true,
  };

  constructor(private store: Store<TodoStateInterface>) {}

  ngOnInit(): void {
    // this.todo = this.store.pipe(getTodoById())
  }

  updateTodo(todo: TodoInterface) {
    console.log('Update ', todo);
    this.store.dispatch(editTodoAction({ todo }));
  }
}
