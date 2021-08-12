import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEntityDemoRoutingModule } from './users-entity-demo-routing.module';
import { UsersEntityDemoComponent } from './users-entity-demo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';


@NgModule({
  declarations: [
    UsersEntityDemoComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    CommonModule,
    UsersEntityDemoRoutingModule
  ]
})
export class UsersEntityDemoModule { }
