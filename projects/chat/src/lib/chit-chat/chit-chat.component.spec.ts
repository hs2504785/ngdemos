import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitChatComponent } from './chit-chat.component';

describe('ChitChatComponent', () => {
  let component: ChitChatComponent;
  let fixture: ComponentFixture<ChitChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
