import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserWsInterface } from '../models/user-ws-interface';
import { UserWsService } from '../services/user-ws.service';

@Component({
  selector: 'app-user-data-dialog',
  templateUrl: './user-ws-dialog.component.html',
  styleUrls: ['./user-ws-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWsDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UserWsInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserWsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserWsService,
  ) {
    this.dialogTitle = data.dialogTitle;
    this.user = data.user;
    this.mode = data.mode;

    const formControls = {
      email: [''],
      first_name: [''],
      last_name: [''],
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...this.user });
    } else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const user: UserWsInterface = {
      ...this.user,
      ...this.form.value,
    };

    if (this.mode == 'update') {
      console.log('Update User', user);

      this.userService.update(user);
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);

      user.avatar = 'https://robohash.org/test?size=128x128';
      this.userService.add(user);
      this.dialogRef.close();
    }
  }
}
