import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './state/reducers/auth.reducer';

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
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
