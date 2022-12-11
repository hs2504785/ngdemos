import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEntityDemoRoutingModule } from './users-entity-demo-routing.module';
import { UsersEntityDemoComponent } from './users-entity-demo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { StoreModule } from '@ngrx/store';
import {
  userEntityDemoFeatureKey,
  userEntityDemoReducer,
} from './state/user-entity-demo.reducer';
import { UserEntityDemoEffects } from './state/user-entity-demo.effects';
import { EffectsModule } from '@ngrx/effects';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersEntityDemoComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
  ],
  imports: [
    CommonModule,
    UsersEntityDemoRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userEntityDemoFeatureKey, userEntityDemoReducer),
    EffectsModule.forFeature([UserEntityDemoEffects]),
  ],
})
export class UsersEntityDemoModule {}
