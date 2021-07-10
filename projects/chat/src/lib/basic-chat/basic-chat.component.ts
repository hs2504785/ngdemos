import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Pusher from 'pusher-js';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'lib-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css'],
})
export class BasicChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  form: FormGroup;
  username = 'Hemant';
  message = '';
  messages = [
    { username: 'Hemant', message: 'Hey ' },
    { username: 'Vivek', message: 'Yes sir' },
    { username: 'Vivek', message: 'How are you?' },
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl(''),
    });

    Pusher.logToConsole = true;

    const pusher = new Pusher('6da8b4c72ac7d3771308', {
      cluster: 'mt1',
    });

    const channel = pusher.subscribe('chat');

    channel.bind('message', data => {
      console.log('PPP', data);

      this.messages.push(data);
    });

    this.scrollToBottom();
  }

  sendMessage(): void {
    this.chatService
      .sendMessage({
        username: this.username,
        ...this.form.value,
      })
      .subscribe(() => this.form.reset());
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
