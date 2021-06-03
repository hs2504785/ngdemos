import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEntityRoutingModule } from './users-entity-routing.module';
import { UsersEntityComponent } from './users-entity.component';


@NgModule({
  declarations: [
    UsersEntityComponent
  ],
  imports: [
    CommonModule,
    UsersEntityRoutingModule
  ]
})
export class UsersEntityModule { }
