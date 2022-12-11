import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducers } from './state/reducers/auth.reducer';
import { statusReducer } from './state/reducers/status.reducer';
import { LoginEffects } from './state/effects/login.effects';
import { LogoutEffects } from './state/effects/logout.effects';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoutConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    StoreModule.forFeature(authFeatureKey, authReducers),
    EffectsModule.forFeature([AuthEffects, LoginEffects, LogoutEffects]),
  ],
})
export class AuthModule {}
