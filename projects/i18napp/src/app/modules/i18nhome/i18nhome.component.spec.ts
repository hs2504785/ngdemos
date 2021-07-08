import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nhomeComponent } from './i18nhome.component';

describe('I18nhomeComponent', () => {
  let component: I18nhomeComponent;
  let fixture: ComponentFixture<I18nhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
