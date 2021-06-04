import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserEntityInterface } from './models/user-entity-interface';
import { UserEntityStateInterface } from './models/user-entity-state.interface';
import { UserEntityService } from './services/user-entity.service';
import { deleteEntityUserAction } from './state/user-entity.actions';
import { selectEntityUsers } from './state/user-entity.selectors';
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
    private store: Store<UserEntityStateInterface>,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectEntityUsers));
  }

  removeUser(user) {
    console.log('Remove user');
    this.store.dispatch(deleteEntityUserAction({ id: user.id }));
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.dialog.open(UserEntityDialogComponent, dialogConfig);
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();
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
