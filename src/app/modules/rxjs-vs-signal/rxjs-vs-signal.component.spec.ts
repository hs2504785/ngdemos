import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsVsSignalComponent } from './rxjs-vs-signal.component';

describe('RxjsVsSignalComponent', () => {
  let component: RxjsVsSignalComponent;
  let fixture: ComponentFixture<RxjsVsSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RxjsVsSignalComponent]
    });
    fixture = TestBed.createComponent(RxjsVsSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
