import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersStoreRoutingModule } from './users-store-routing.module';
import { UsersStoreComponent } from './users-store.component';
import { UserStoreDialogComponent } from './user-store-dialog/user-store-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './state/user-store.effects';
import { StoreModule } from '@ngrx/store';
import {
  userStoreFeatureKey,
  userStoreReducer,
} from './state/user-store.reducer';

@NgModule({
  declarations: [UsersStoreComponent, UserStoreDialogComponent],
  imports: [
    CommonModule,
    UsersStoreRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userStoreFeatureKey, userStoreReducer),
    EffectsModule.forFeature([UserStoreEffects]),
  ],
})
export class UsersStoreModule {}
