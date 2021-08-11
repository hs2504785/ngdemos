import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-cs-dialog',
  templateUrl: './user-cs-dialog.component.html',
  styleUrls: ['./user-cs-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
