import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOnpushComponent } from './default-onpush.component';

describe('DefaultOnpushComponent', () => {
  let component: DefaultOnpushComponent;
  let fixture: ComponentFixture<DefaultOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultOnpushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
