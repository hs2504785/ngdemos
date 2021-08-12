import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsdemoRoutingModule } from './csdemo-routing.module';
import { CsdemoComponent } from './csdemo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
