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
import { DatabaseService } from '../../services/database.service';
import { TodoStore } from '../../services/todo-store.service';

@Component({
  selector: 'lib-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  @Input() todo: TodoInterface;

  constructor(
    private todoStore: TodoStore,
    private databaseService: DatabaseService,
  ) {}

  ngOnInit(): void {
    // this.todo = todo;
  }

  updateTodo(todo: TodoInterface) {
    // this.todoStore.updateTodo({ ...this.todo, ...todo });
    this.databaseService.updateTodoItem({ id: this.todo.id, ...todo });
  }
}
