import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'lib-basic-chat',
  templateUrl: './basic-chat.component.html',
  styleUrls: ['./basic-chat.component.css'],
})
export class BasicChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.chatService.getMessage().subscribe(res => {
    //   console.log('Gt message');
    // });
  }

  send(message) {
    // this.chatService.sendMessage(message);
  }
}
