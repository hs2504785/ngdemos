import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-chat',
  template: `
    <header class="m-2 d-flex justify-content-center">
      <a
        routerLink="basic-chat"
        routerLinkActive="active"
        class="btn btn-outline-success mr-2"
        >Chat</a
      >
      <a
        routerLink="chit-chat"
        routerLinkActive="active"
        class="btn btn-outline-warning"
        >Chitchat</a
      >
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
