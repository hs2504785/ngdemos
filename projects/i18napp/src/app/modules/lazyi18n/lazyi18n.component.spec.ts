import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyi18nComponent } from './lazyi18n.component';

describe('Lazyi18nComponent', () => {
  let component: Lazyi18nComponent;
  let fixture: ComponentFixture<Lazyi18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazyi18nComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazyi18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
