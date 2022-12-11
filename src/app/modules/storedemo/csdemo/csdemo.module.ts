import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsdemoRoutingModule } from './csdemo-routing.module';
import { CsdemoComponent } from './csdemo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  declarations: [
    CsdemoComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
  ],
  imports: [
    CommonModule,
    CsdemoRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CsdemoModule {}
