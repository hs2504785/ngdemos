import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoService } from '../services/todo.service';
import { TodoInterface } from '../models/todo.interface';
import {
  addTodoAction,
  addTodoFailureAction,
  addTodoSuccessAction,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos),
      concatMap(
        () => this.todoService.getTodos(),
        // /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // EMPTY.pipe(
        //   map(data => TodoActions.loadTodosSuccess({ data })),
        //   catchError(error => of(TodoActions.loadTodosFailure({ error }))))
      ),
      map((todos: TodoInterface[]) => loadTodosSuccess({ todos })),
      catchError(error => of(loadTodosFailure({ error }))),
    );
  });

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodoAction),
      switchMap(({ todo }) => {
        return this.todoService.addTodo(todo).pipe(
          map((todo: TodoInterface) => {
            return addTodoSuccessAction({ todo });
          }),
          catchError(() => {
            return of(addTodoFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
