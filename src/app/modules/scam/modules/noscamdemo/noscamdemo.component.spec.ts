import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoscamdemoComponent } from './noscamdemo.component';

describe('NoscamdemoComponent', () => {
  let component: NoscamdemoComponent;
  let fixture: ComponentFixture<NoscamdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoscamdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoscamdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
