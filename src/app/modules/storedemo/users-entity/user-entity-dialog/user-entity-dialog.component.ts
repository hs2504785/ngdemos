import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserEntityInterface } from '../models/user-entity-interface';
import { UserEntityService } from '../services/user-entity.service';

@Component({
  selector: 'app-user-entity-dialog',
  templateUrl: './user-entity-dialog.component.html',
  styleUrls: ['./user-entity-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEntityDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UserEntityInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserEntityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserEntityService,
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
    const user: UserEntityInterface = {
      ...this.user,
      ...this.form.value,
    };
    if (this.mode == 'update') {
      console.log('Update User', user);

      // this.userService.update(user);
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);

      // this.userService.add(user);
      this.dialogRef.close();
    }
  }
}
