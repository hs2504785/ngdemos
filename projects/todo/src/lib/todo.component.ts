import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoInterface } from './models/todo.interface';
import { deleteTodoAction } from './state/todo.actions';
import { selectTodos } from './state/todo.selectors';

@Component({
  selector: 'lib-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {}
