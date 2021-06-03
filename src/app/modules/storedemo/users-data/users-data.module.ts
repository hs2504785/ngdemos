import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDataRoutingModule } from './users-data-routing.module';
import { UsersDataComponent } from './users-data.component';


@NgModule({
  declarations: [
    UsersDataComponent
  ],
  imports: [
    CommonModule,
    UsersDataRoutingModule
  ]
})
export class UsersDataModule { }
