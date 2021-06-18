import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-workerdemo',
  template: `
    <header class="m-2 d-flex justify-content-center">
      <a
        routerLink="workersample"
        routerLinkActive="active"
        class="btn btn-outline-success mr-2"
        >Sample</a
      >
      <a
        routerLink="workerdemo"
        routerLinkActive="active"
        class="btn btn-outline-warning"
        >Demo</a
      >
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class WorkerdemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
