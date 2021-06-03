import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
