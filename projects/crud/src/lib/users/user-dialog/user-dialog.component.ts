import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'lib-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  course: UserInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UserService,
  ) {
    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    const formControls = {
      name: [''],
      email: [''],
      company: [''],
      phone: [''],
      website: [''],
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({ ...data.user });
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
    const user: UserInterface = {
      // ...this.user,
      ...this.form.value,
    };
    if (this.mode == 'update') {
      console.log('Update User', user);

      // this.coursesService.update(course);
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);

      this.userService.add(this.form.value);
      this.dialogRef.close();
    }
  }
}
