import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { UserCs } from '../../models/user-cs-interface';

@Component({
  selector: 'app-user-cs-dialog',
  templateUrl: './user-cs-dialog.component.html',
  styleUrls: ['./user-cs-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCsDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UserCs;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserCsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
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
    const user: UserCs = {
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
