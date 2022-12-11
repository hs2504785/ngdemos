import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable, Subscription } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserCsDialogComponent } from '../../../users-cs/dialogs/user-cs-dialog/user-cs-dialog.component';
import { UserCs } from '../../../users-cs/models/user-cs-interface';
import { UserCsStore } from '../../../users-cs/services/user-cs-store.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent implements OnInit, OnDestroy {
  users$: Observable<UserCs[]> = this.userService.users$;
  sub: Subscription;

  constructor(private dialog: MatDialog, private userService: UserCsStore) {}

  ngOnInit(): void {
    this.userService.getUsers();
  }

  removeUser(user) {
    console.log('Remove user');
    this.userService.removeUser(user.id);
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.sub = this.dialog
      .open(UserCsDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        res && this.userService.addUser(res);
      });
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle: 'Edit User',
      user,
      mode: 'update',
    };

    const editSub = this.dialog
      .open(UserCsDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        res && this.userService.updateUser(res);
      });

    this.sub && this.sub.add(editSub);
  }

  selectUser(user) {
    this.userService.patchState({
      selectdUserId: user.id,
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
