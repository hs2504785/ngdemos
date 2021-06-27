import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletComponent } from './template-outlet.component';

describe('TemplateOutletComponent', () => {
  let component: TemplateOutletComponent;
  let fixture: ComponentFixture<TemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
