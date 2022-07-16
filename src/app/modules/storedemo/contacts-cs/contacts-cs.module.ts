import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsCsRoutingModule } from './contacts-cs-routing.module';
import { ContactsCsComponent } from './contacts-cs.component';


@NgModule({
  declarations: [
    ContactsCsComponent
  ],
  imports: [
    CommonModule,
    ContactsCsRoutingModule
  ]
})
export class ContactsCsModule { }
