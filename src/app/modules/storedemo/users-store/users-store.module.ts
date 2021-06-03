import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersStoreRoutingModule } from './users-store-routing.module';
import { UsersStoreComponent } from './users-store.component';


@NgModule({
  declarations: [
    UsersStoreComponent
  ],
  imports: [
    CommonModule,
    UsersStoreRoutingModule
  ]
})
export class UsersStoreModule { }
