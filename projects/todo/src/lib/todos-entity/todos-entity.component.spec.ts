import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEntityComponent } from './todos-entity.component';

describe('TodosEntityComponent', () => {
  let component: TodosEntityComponent;
  let fixture: ComponentFixture<TodosEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
