import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { TodoActionTypes } from '../state/todo-entity-action-types';

@Injectable({
  providedIn: 'root',
})
export class TodoSocketService extends Socket {
  liveCreated$ = this.fromEvent<any>(TodoActionTypes.ADD_ENTITY_TODO);
  liveUpdated$ = this.fromEvent<any>(TodoActionTypes.EDIT_TODO);
  liveDeleted$ = this.fromEvent<number>(
    TodoActionTypes.DELETE_ENTITY_TODO_SUCCESS,
  );

  constructor() {
    super({
      url: `${environment.socketConfig.url}/todos`,
      options: environment.socketConfig.opts,
    });
  }
}
