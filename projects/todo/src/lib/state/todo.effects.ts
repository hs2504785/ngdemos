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
  deleteTodoAction,
  deleteTodoFailureAction,
  deleteTodoSuccessAction,
  editTodoAction,
  editTodoFailureAction,
  editTodoSuccessAction,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  // Get All
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

  // Add
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

  // Edit
  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editTodoAction),
      switchMap(({ todo }) => {
        // this.loader.show();
        return this.todoService.updateTodo(todo).pipe(
          map((todo: TodoInterface) => {
            return editTodoSuccessAction({ todo });
          }),
          catchError(() => {
            // this.loader.hide();
            return of(editTodoFailureAction());
          }),
        );
      }),
    ),
  );

  // Delete
  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoAction),
      switchMap(({ todoId }) => {
        return this.todoService.removeTodo(todoId).pipe(
          map(() => {
            return deleteTodoSuccessAction();
          }),
          catchError(() => {
            return of(deleteTodoFailureAction());
          }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
