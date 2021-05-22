import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { TodoInterface } from '../../models/todo.interface';

@Component({
  selector: 'lib-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos$ = this.dataService.getTodos();
  }
}
