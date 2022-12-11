import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDataRoutingModule } from './users-data-routing.module';
import { UsersDataComponent } from './users-data.component';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersDataComponent, UserDataDialogComponent],
  imports: [
    CommonModule,
    UsersDataRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class UsersDataModule {}
