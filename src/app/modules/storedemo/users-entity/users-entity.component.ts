import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserEntityInterface } from './models/user-entity-interface';
import { UserEntityService } from './services/user-entity.service';
import { UserEntityDialogComponent } from './user-entity-dialog/user-entity-dialog.component';

@Component({
  selector: 'app-users-entity',
  templateUrl: './users-entity.component.html',
  styleUrls: ['./users-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersEntityComponent {
  users$: Observable<UserEntityInterface[]>;
  constructor(
    private userStoreService: UserEntityService,
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

    this.dialog.open(UserEntityDialogComponent, dialogConfig);
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
      .open(UserEntityDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
      });
  }
}
