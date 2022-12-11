import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UcardRoutingModule } from './ucard-routing.module';
import { UcardComponent } from './ucard.component';
import { UcardDialogComponent } from './ucard-dialog/ucard-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [UcardComponent, UcardDialogComponent],
  imports: [
    CommonModule,
    UcardRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class UcardModule {}
