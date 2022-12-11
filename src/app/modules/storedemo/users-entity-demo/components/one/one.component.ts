import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserEntityDialogComponent } from '../../../users-entity/user-entity-dialog/user-entity-dialog.component';
import { UserEntityDemoInterface } from '../../models/user-entity-demo-interface';
import {
  deleteEntityDemoUserAction,
  setUserIdAction,
} from '../../state/user-entity-demo.actions';
import { UserEntityDemoStateInterface } from '../../state/user-entity-demo.reducer';
import { selectEntityDemoUsers } from '../../state/user-entity-demo.selectors';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent implements OnInit {
  users$: Observable<UserEntityDemoInterface[]>;
  constructor(
    private store: Store<UserEntityDemoStateInterface>,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectEntityDemoUsers));
  }

  removeUser(user) {
    console.log('Remove user');
    this.store.dispatch(deleteEntityDemoUserAction({ id: user.id }));
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

  selectUser(user) {
    this.store.dispatch(setUserIdAction({ id: user.id }));
  }
}
