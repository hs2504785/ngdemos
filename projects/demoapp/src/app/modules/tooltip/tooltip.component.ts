import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  items = [
    {
      name: 'Mark Hoppus',
      age: 44,
      location: 'California',
    },
    {
      name: 'Tom Delonge',
      age: 41,
      location: 'California',
    },
    {
      name: 'Travis Barker',
      age: 41,
      location: 'California',
    },
  ];
  constructor() {
    setTimeout(() => {
      this.items = [
        ...this.items,
        { name: 'Hemant kumar singh', age: 40, location: 'India' },
      ];
    }, 2000);
  }
}
