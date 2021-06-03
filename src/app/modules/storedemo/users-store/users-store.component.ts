import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-store',
  templateUrl: './users-store.component.html',
  styleUrls: ['./users-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
