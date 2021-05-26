import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoInterface } from '../../../models/todo.interface';
import { addEntityTodo } from '../../state/todo.actions';

@Component({
  selector: 'lib-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addTodo(todo: TodoInterface) {
    console.log('Todo', todo);
    this.store.dispatch(addEntityTodo({ todo }));
  }
}
