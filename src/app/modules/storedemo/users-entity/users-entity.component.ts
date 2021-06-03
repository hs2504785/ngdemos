import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-entity',
  templateUrl: './users-entity.component.html',
  styleUrls: ['./users-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersEntityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
