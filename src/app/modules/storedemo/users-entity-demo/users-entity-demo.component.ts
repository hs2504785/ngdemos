import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-entity-demo',
  templateUrl: './users-entity-demo.component.html',
  styleUrls: ['./users-entity-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersEntityDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
