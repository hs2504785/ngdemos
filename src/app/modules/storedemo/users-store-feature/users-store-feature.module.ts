import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersStoreFeatureRoutingModule } from './users-store-feature-routing.module';
import { UsersStoreFeatureComponent } from './users-store-feature.component';


@NgModule({
  declarations: [
    UsersStoreFeatureComponent
  ],
  imports: [
    CommonModule,
    UsersStoreFeatureRoutingModule
  ]
})
export class UsersStoreFeatureModule { }
