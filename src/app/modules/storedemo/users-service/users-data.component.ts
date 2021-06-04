import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserDataInterface } from './models/user-data-interface';
import { UserDataService } from './services/user-data.service';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDataComponent {
  users: UserDataInterface[];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }

  removeUser() {
    console.log('Remove user');
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.dialog.open(UserDataDialogComponent, dialogConfig);
  }

  editUser() {
    const dialogConfig = defaultDialogConfig();
    const user = { name: 'hemant' };
    dialogConfig.data = {
      dialogTitle: 'Edit User',
      user,
      mode: 'update',
    };

    this.dialog
      .open(UserDataDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
      });
  }
}
