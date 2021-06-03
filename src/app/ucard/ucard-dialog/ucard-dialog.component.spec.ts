import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcardDialogComponent } from './ucard-dialog.component';

describe('UcardDialogComponent', () => {
  let component: UcardDialogComponent;
  let fixture: ComponentFixture<UcardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
