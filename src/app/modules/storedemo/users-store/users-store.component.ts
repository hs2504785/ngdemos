import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserStoreInterface } from './models/user-store-interface';
import { UserStoreStateInterface } from './models/user-store-state.interface';
import { UserStoreService } from './services/user-store.service';
import { selectStoreUsers } from './state/user-store.selectors';
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
    private store: Store<UserStoreStateInterface>,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectStoreUsers));
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
