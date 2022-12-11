import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserDataInterface } from './models/user-data-interface';
import { UserDataService1 } from './services/user-data.service';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDataComponent {
  users$: Observable<UserDataInterface[]>;
  constructor(
    private userDataService: UserDataService1,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users$ = this.userDataService.entities$;
  }

  removeUser(user) {
    console.log('Remove user');
    this.userDataService.delete(user);
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.dialog.open(UserDataDialogComponent, dialogConfig);
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();
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
