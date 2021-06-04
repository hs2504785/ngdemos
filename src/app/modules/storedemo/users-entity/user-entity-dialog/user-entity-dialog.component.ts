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
import { UserEntityInterface } from '../models/user-entity-interface';
import { UserEntityStateInterface } from '../models/user-entity-state.interface';
import { UserEntityService } from '../services/user-entity.service';
import {
  addEntityUserAction,
  editEntityUserAction,
} from '../state/user-entity.actions';

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

      this.store.dispatch(editEntityUserAction({ user }));
      this.dialogRef.close();
    } else if (this.mode == 'create') {
      console.log('Add User', user);

      user.avatar = 'https://robohash.org/test?size=128x128';
      this.store.dispatch(addEntityUserAction({ user }));
      this.dialogRef.close();
    }
  }
}
