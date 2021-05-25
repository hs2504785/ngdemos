import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EntityTodoEffects } from './entity-todo.effects';

describe('EntityTodoEffects', () => {
  let actions$: Observable<any>;
  let effects: EntityTodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntityTodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EntityTodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
