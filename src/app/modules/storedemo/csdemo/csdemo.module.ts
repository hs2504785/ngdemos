import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsdemoRoutingModule } from './csdemo-routing.module';
import { CsdemoComponent } from './csdemo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';


@NgModule({
  declarations: [
    CsdemoComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    CommonModule,
    CsdemoRoutingModule
  ]
})
export class CsdemoModule { }
