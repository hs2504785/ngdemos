import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersStoreRoutingModule } from './users-store-routing.module';
import { UsersStoreComponent } from './users-store.component';
import { UserStoreDialogComponent } from './user-store-dialog/user-store-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
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
