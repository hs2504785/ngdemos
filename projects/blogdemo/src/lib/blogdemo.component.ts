import { Component } from '@angular/core';

@Component({
  selector: 'lib-blogdemo',
  templateUrl: './blogdemo.component.html',
  styles: [
    `
          :host {
            height: 100vh;
          }
        `,
  ],
})
export class BlogdemoComponent {}
