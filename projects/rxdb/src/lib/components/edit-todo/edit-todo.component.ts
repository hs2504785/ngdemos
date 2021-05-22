import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoInterface } from '../../models/todo.interface';
import { TodoStore } from '../../services/todo-store.service';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: TodoInterface;

  constructor(private todoStore: TodoStore) {}

  ngOnInit(): void {
    // this.todo = todo;
  }

  updateTodo(todo: TodoInterface) {
    this.todoStore.updateTodo({ ...this.todo, ...todo });
  }
}
