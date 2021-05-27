import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { of, Subject, throwError } from 'rxjs';

import { mockUsers } from './mock.users';
import { UserLoaderService } from './user-loader.service';
import * as UserActions from './user.actions';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
  let actions$: Subject<Action>;
  let effects: UserEffects;
  let userLoaderMock: jasmine.SpyObj<UserLoaderService>;

  beforeEach(() => {
    actions$ = new Subject<Action>();
    userLoaderMock = jasmine.createSpyObj<UserLoaderService>([
      'load'
    ]);

    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UserLoaderService, useValue: userLoaderMock }
      ]
    });

    effects = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadUsers', () => {
    it('can load users', () => {
      userLoaderMock.load.and.returnValue(of(mockUsers));
      effects.loadUsers$.subscribe(a => {
        expect(a.type).toEqual(UserActions.loadUsersSuccess.type);
        expect(a['users']).toBe(mockUsers);
      });
      actions$.next(UserActions.loadUsers());
    });

    it('can handle user loading failing', () => {
      userLoaderMock.load.and.returnValue(throwError('oops'));
      effects.loadUsers$.subscribe(a => {
        expect(a.type).toEqual(UserActions.loadUsersFailure.type);
        expect(a['error']).toBe('oops');
      });
      actions$.next(UserActions.loadUsers());
    });
  });
});
