import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../models/todo.interface';

@Component({
  selector: 'lib-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addTodo(todo: TodoInterface) {
    console.log('Todo', todo);
  }
}
