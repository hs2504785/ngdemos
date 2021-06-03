import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UcardInterface } from '../models/ucard-interface';
import { UcardService } from '../services/ucard.service';

@Component({
  selector: 'app-ucard-dialog',
  templateUrl: './ucard-dialog.component.html',
  styleUrls: ['./ucard-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UcardDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UcardInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private userService: UcardService,
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
    const user: UcardInterface = {
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
