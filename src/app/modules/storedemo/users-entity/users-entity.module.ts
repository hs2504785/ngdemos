import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEntityRoutingModule } from './users-entity-routing.module';
import { UsersEntityComponent } from './users-entity.component';
import { UserEntityDialogComponent } from './user-entity-dialog/user-entity-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  userEntityFeatureKey,
  userEntityReducer,
} from './state/user-entity.reducer';
import { UserEntityEffects } from './state/user-entity.effects';

@NgModule({
  declarations: [UsersEntityComponent, UserEntityDialogComponent],
  imports: [
    CommonModule,
    UsersEntityRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userEntityFeatureKey, userEntityReducer),
    EffectsModule.forFeature([UserEntityEffects]),
  ],
})
export class UsersEntityModule {}
