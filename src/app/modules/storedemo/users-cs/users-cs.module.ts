import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersCsRoutingModule } from './users-cs-routing.module';
import { UsersCsComponent } from './users-cs.component';
import { UserCsDialogComponent } from './dialogs/user-cs-dialog/user-cs-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

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
