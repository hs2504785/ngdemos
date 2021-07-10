import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChatComponent } from './basic-chat.component';

describe('BasicChatComponent', () => {
  let component: BasicChatComponent;
  let fixture: ComponentFixture<BasicChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
