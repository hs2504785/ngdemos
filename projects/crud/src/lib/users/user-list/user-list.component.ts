import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserInterface } from '../models/user.interface';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'lib-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users: UserInterface[];
  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users;
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.dialog.open(UserDialogComponent, dialogConfig);
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit User',
      user,
      mode: 'update',
    };

    this.dialog
      .open(UserDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
        // this.courseChanged.emit()
      });
  }

  deleteUser(user) {
    console.log('Delete User', user);
  }

  trackByUser(index, user) {
    return user.id;
  }
}
