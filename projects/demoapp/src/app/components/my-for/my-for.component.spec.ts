import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForComponent } from './my-for.component';

describe('MyForComponent', () => {
  let component: MyForComponent;
  let fixture: ComponentFixture<MyForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
