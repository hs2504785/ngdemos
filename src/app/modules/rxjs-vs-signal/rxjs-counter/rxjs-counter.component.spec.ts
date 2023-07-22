import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCounterComponent } from './rxjs-counter.component';

describe('RxjsCounterComponent', () => {
  let component: RxjsCounterComponent;
  let fixture: ComponentFixture<RxjsCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RxjsCounterComponent]
    });
    fixture = TestBed.createComponent(RxjsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
