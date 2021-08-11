import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersCsRoutingModule } from './users-cs-routing.module';
import { UsersCsComponent } from './users-cs.component';
import { UserCsDialogComponent } from './dialogs/user-cs-dialog/user-cs-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [UsersCsComponent, UserCsDialogComponent],
  imports: [
    CommonModule,
    UsersCsRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class UsersCsModule {}
