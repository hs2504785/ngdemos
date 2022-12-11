import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserEntityInterface } from '../models/user-entity-interface';
import {
  addEntityUserAction,
  editEntityUserAction,
} from '../state/user-entity.actions';
import { UserEntityStateInterface } from '../state/user-entity.reducer';

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
    private store: Store<UserEntityStateInterface>,
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

      this.store.dispatch(
        editEntityUserAction({
          user: { id: this.user.id, changes: this.form.value },
        }),
      );
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);

      user.avatar = 'https://robohash.org/test?size=128x128';
      this.store.dispatch(addEntityUserAction({ user }));
      this.dialogRef.close();
    }
  }
}
