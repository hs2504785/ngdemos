import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UcardRoutingModule } from './ucard-routing.module';
import { UcardComponent } from './ucard.component';
import { UcardDialogComponent } from './ucard-dialog/ucard-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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
