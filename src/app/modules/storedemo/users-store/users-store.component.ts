import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserStoreInterface } from './models/user-store-interface';
import { UserStoreService } from './services/user-store.service';
import { UserStoreDialogComponent } from './user-store-dialog/user-store-dialog.component';

@Component({
  selector: 'app-users-store',
  templateUrl: './users-store.component.html',
  styleUrls: ['./users-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersStoreComponent implements OnInit {
  users$: Observable<UserStoreInterface[]>;
  constructor(
    private userStoreService: UserStoreService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users$ = this.userStoreService.getUsers();
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

    this.dialog.open(UserStoreDialogComponent, dialogConfig);
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
      .open(UserStoreDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
      });
  }
}
