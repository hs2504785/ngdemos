import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTemplateOutletComponent } from './with-template-outlet.component';

describe('WithTemplateOutletComponent', () => {
  let component: WithTemplateOutletComponent;
  let fixture: ComponentFixture<WithTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTemplateOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
