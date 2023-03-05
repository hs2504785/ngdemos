import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushAsyncComponent } from './onpush-async.component';

describe('OnpushAsyncComponent', () => {
  let component: OnpushAsyncComponent;
  let fixture: ComponentFixture<OnpushAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpushAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
