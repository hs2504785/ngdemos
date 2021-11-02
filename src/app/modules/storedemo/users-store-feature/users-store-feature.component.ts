import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-store-feature',
  templateUrl: './users-store-feature.component.html',
  styleUrls: ['./users-store-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersStoreFeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
