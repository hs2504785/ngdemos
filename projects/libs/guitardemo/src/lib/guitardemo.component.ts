import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-guitardemo',
  template: `
    <div>
      <app-header></app-header>
      <app-home></app-home>
    </div>
  `,
  styles: [],
})
export class GuitardemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
