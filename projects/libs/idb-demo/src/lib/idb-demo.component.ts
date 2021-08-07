import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-idb-demo',
  template: `
    <header class="m-2 d-flex justify-content-center">
      <a
        routerLink="idb-sample"
        routerLinkActive="active"
        class="btn btn-outline-success mr-2"
        >IDB Sample</a
      >
      <a
        routerLink="user-search"
        routerLinkActive="active"
        class="btn btn-outline-primary mr-2"
        >User Search</a
      >
      <!--
  <a
    routerLink="user-search-cached"
    routerLinkActive="active"
    class="btn btn-outline-warning mr-2"
    >User Search Cached</a
  > -->
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class IdbDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
