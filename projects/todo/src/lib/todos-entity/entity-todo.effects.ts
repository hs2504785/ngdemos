import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { updateEntityTodo } from './state/todo.actions';

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

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
