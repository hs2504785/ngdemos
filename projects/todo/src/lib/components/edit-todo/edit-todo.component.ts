import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'projects/rxdb/src/lib/models/todo.interface';

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

  constructor() {}

  ngOnInit(): void {}

  updateTodo(todo: TodoInterface) {
    console.log('Update ', todo);
  }
}
