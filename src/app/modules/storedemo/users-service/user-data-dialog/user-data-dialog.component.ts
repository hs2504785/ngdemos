import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserDataInterface } from '../models/user-data-interface';
import { UserService } from '../services/user-data.service';

@Component({
  selector: 'app-user-data-dialog',
  templateUrl: './user-data-dialog.component.html',
  styleUrls: ['./user-data-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UserDataInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserService,
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
    const user: UserDataInterface = {
      ...this.user,
      ...this.form.value,
    };
    if (this.mode == 'update') {
      console.log('Update User', user);

      this.dialogRef.close(user);
    } else if (this.mode == 'create') {
      console.log('Add User', user);
      user.avatar = 'https://reqres.in/img/faces/10-image.jpg';
      this.dialogRef.close(user);
    }
  }
}
