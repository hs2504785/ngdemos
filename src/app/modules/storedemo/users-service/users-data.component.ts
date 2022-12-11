import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';
import { defaultDialogConfig } from 'src/app/shared/dialogs/default-dialog-config';
import { UserDataInterface } from './models/user-data-interface';
import { UserService } from './services/user-data.service';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDataComponent implements OnInit, OnDestroy {
  users: UserDataInterface[];
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private userService: UserService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }

  removeUser(user) {
    console.log('Remove user');
    this.userService.removeUser(user.id).subscribe(res => {
      this.users = this.users.filter(res => {
        return res.id !== user.id;
      });
      this.cd.detectChanges();
    });
  }

  addUser() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add User',
      mode: 'create',
    };

    this.sub = this.dialog
      .open(UserDataDialogComponent, dialogConfig)
      .afterClosed()
      .pipe(exhaustMap((user: any) => this.userService.addUser(user)))
      .subscribe(res => {
        this.users = [res, ...this.users];
        this.cd.detectChanges();
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
      .open(UserDataDialogComponent, dialogConfig)
      .afterClosed()
      .pipe(switchMap(res => this.userService.updateUser(res)))
      .subscribe(updatedUser => {
        this.users = this.users.map(item => {
          if (item.id === user.id) {
            return updatedUser;
          }

          return item;
        });
        console.log('Closed Edit', updatedUser);
        this.cd.detectChanges();
      });

    this.sub && this.sub.add(editSub);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
