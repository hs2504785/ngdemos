import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersStoreFeatureRoutingModule } from './users-store-feature-routing.module';
import { UsersStoreFeatureComponent } from './users-store-feature.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersStoreFeatureEffects } from './state/effects/users-store-feature.effects';
import { StoreModule } from '@ngrx/store';
import { userStoreFeature } from './state/reducers/users-store-feature.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersStoreFeatureComponent],
  imports: [
    CommonModule,
    UsersStoreFeatureRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userStoreFeature),
    EffectsModule.forFeature([UsersStoreFeatureEffects]),
  ],
})
export class UsersStoreFeatureModule {}
