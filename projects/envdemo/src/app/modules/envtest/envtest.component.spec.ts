import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvtestComponent } from './envtest.component';

describe('EnvtestComponent', () => {
  let component: EnvtestComponent;
  let fixture: ComponentFixture<EnvtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
