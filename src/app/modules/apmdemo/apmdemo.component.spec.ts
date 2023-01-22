import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmdemoComponent } from './apmdemo.component';

describe('ApmdemoComponent', () => {
  let component: ApmdemoComponent;
  let fixture: ComponentFixture<ApmdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApmdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApmdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
