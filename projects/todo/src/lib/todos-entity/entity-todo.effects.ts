import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoInterface } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';
import { TodoSocketService } from './services/todo-socket.service';
import {
  addEntityTodo,
  addEntityTodoFailure,
  addEntityTodoSuccess,
  deleteEntityTodo,
  deleteEntityTodoFailure,
  deleteEntityTodoSuccess,
  updateEntityTodo,
} from './state/todo.actions';

@Injectable()
export class EntityTodoEffects {
  // Edit
  editPost$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateEntityTodo),
        switchMap(({ todo }) => {
          console.log('HERER', todo);
          const update = {
            id: todo.id,
            ...todo.changes,
          };
          return this.todoService.updateTodo(update);
        }),
      ),
    { dispatch: false },
  );

  // Add
  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEntityTodo),
      switchMap(({ todo }) => {
        return this.todoService.addTodo(todo).pipe(
          map((todo: TodoInterface) => {
            return addEntityTodoSuccess({ todo });
          }),
          catchError(() => {
            return of(addEntityTodoFailure());
          }),
        );
      }),
    ),
  );

  // Delete
  deleteEntityTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEntityTodo),
      switchMap(({ todoId }) => {
        return this.todoService.removeTodo(todoId).pipe(
          map(() => {
            return deleteEntityTodoSuccess({ todoId });
          }),
          catchError(() => {
            return of(deleteEntityTodoFailure());
          }),
        );
      }),
    ),
  );

  // Socket Live Events
  liveCreate$ = this.todoSocket.liveCreated$.pipe(
    map(todo => addEntityTodoSuccess({ todo })),
  );

  // liveUpdate$ = this.todoSocket.liveUpdated$.pipe(
  //   map(todo => editPost({ todo })),
  // );

  liveDestroy$ = this.todoSocket.liveDeleted$.pipe(
    map(todoId => deleteEntityTodoSuccess({ todoId })),
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private todoSocket: TodoSocketService,
  ) {}
}
