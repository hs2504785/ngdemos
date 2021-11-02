import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserStoreInterface } from '../users-store/models/user-store-interface';
import { select, Store } from '@ngrx/store';
import { deleteStoreUserAction } from './state/actions/users-store-feature.actions';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserStoreDialogComponent } from '../users-store/user-store-dialog/user-store-dialog.component';
import { selectStoreUsers } from './state/selectors/users-store-feature.selectors';

@Component({
  selector: 'app-users-store-feature',
  templateUrl: './users-store-feature.component.html',
  styleUrls: ['./users-store-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersStoreFeatureComponent implements OnInit {
  users$: any;
  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectStoreUsers));
  }

  removeUser(user: UserStoreInterface) {
    console.log('Remove user');
    this.store.dispatch(deleteStoreUserAction({ id: user.id }));
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.dialog.open(UserStoreDialogComponent, dialogConfig);
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();
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
