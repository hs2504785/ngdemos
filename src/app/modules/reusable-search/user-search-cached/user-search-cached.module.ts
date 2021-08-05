import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchCachedRoutingModule } from './user-search-cached-routing.module';
import { UserSearchCachedComponent } from './user-search-cached.component';


@NgModule({
  declarations: [
    UserSearchCachedComponent
  ],
  imports: [
    CommonModule,
    UserSearchCachedRoutingModule
  ]
})
export class UserSearchCachedModule { }
