import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdemoComponent } from './csdemo.component';

describe('CsdemoComponent', () => {
  let component: CsdemoComponent;
  let fixture: ComponentFixture<CsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
