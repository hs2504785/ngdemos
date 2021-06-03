import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcardComponent } from './ucard.component';

describe('UcardComponent', () => {
  let component: UcardComponent;
  let fixture: ComponentFixture<UcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
