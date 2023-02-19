import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyi18ndemoComponent } from './lazyi18ndemo.component';

describe('Lazyi18ndemoComponent', () => {
  let component: Lazyi18ndemoComponent;
  let fixture: ComponentFixture<Lazyi18ndemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazyi18ndemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazyi18ndemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
