import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-crud',
  templateUrl: './crud.component.html',
  styles: [
    `
          header a {
            margin-left: 6px;
          }
        `,
  ],
})
export class CrudComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
