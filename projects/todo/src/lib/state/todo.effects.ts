import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TodoActions from './todo.actions';
import { TodoService } from '../services/todo.service';
import { TodoInterface } from '../models/todo.interface';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(
        () => this.todoService.getTodos(),
        // /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // EMPTY.pipe(
        //   map(data => TodoActions.loadTodosSuccess({ data })),
        //   catchError(error => of(TodoActions.loadTodosFailure({ error }))))
      ),
      map((todos: TodoInterface[]) => TodoActions.loadTodosSuccess({ todos })),
      catchError(error => of(TodoActions.loadTodosFailure({ error }))),
    );
  });

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
