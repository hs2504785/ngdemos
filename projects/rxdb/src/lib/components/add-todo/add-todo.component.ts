import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../../models/todo.interface';
import { TodoStore } from '../../services/todo-store.service';

@Component({
  selector: 'lib-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private todoStore: TodoStore) {}

  ngOnInit(): void {}

  addTodo(todo: TodoInterface) {
    console.log('ss', todo);
    this.todoStore.addTodo(todo);
    // this.todoService.addTodo(todo).subscribe((todo: TodoInterface) => {
    //   console.log('herere', todo);
    // });
  }
}
