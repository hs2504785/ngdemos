import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModalsRoutingModule } from './lazy-modals-routing.module';
import { LazyModalsComponent } from './lazy-modals.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LazyDialogService } from 'src/app/shared/services/lazy-dialog.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LazyModalsComponent
  ],
  imports: [
    CommonModule,
    LazyModalsRoutingModule,
    MatDialogModule,
  ],
  providers: [
    LazyDialogService
  ]
})
export class LazyModalsModule { }
