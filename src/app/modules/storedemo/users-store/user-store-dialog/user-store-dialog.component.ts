import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserStoreInterface } from '../models/user-store-interface';
import { UserStoreStateInterface } from '../models/user-store-state.interface';
import { UserStoreService } from '../services/user-store.service';
import {
  addStoreUserAction,
  editStoreUserAction,
} from '../state/user-store.actions';

@Component({
  selector: 'app-user-store-dialog',
  templateUrl: './user-store-dialog.component.html',
  styleUrls: ['./user-store-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStoreDialogComponent {
  form: FormGroup;

  dialogTitle: string;

  user: UserStoreInterface;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserStoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private store: Store<UserStoreStateInterface>,
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
    const user: UserStoreInterface = {
      ...this.user,
      ...this.form.value,
    };
    if (this.mode == 'update') {
      console.log('Update User', user);

      this.store.dispatch(editStoreUserAction({ user }));
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);
      user.avatar = 'https://robohash.org/test?size=128x128';
      this.store.dispatch(addStoreUserAction({ user }));
      this.dialogRef.close();
    }
  }
}
