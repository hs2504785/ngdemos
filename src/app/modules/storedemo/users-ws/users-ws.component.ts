import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserWsInterface } from './models/user-ws-interface';
import { UserWsService } from './services/user-ws.service';
import { UserWsDialogComponent } from './user-ws-dialog/user-ws-dialog.component';

@Component({
  selector: 'app-users-ws',
  templateUrl: './users-ws.component.html',
  styleUrls: ['./users-ws.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersWsComponent implements OnInit {
  users$: Observable<UserWsInterface[]>;
  constructor(
    private userDataService: UserWsService,
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

    this.dialog.open(UserWsDialogComponent, dialogConfig);
  }

  editUser(user) {
    const dialogConfig = defaultDialogConfig();
    dialogConfig.data = {
      dialogTitle: 'Edit User',
      user,
      mode: 'update',
    };

    this.dialog
      .open(UserWsDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
      });
  }
}
