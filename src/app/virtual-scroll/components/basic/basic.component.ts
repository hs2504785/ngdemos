import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  people: any[];
  constructor() { }

  ngOnInit(): void {
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase()
        };
      });
  }

}
