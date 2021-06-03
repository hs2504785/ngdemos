import { TestBed } from '@angular/core/testing';

import { TodoSocketService } from './todo-socket.service';

describe('TodoSocketService', () => {
  let service: TodoSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
