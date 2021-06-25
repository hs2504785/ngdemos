import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JqueryPluginRoutingModule } from './jquery-plugin-routing.module';
import { JqueryPluginComponent } from './jquery-plugin.component';


@NgModule({
  declarations: [
    JqueryPluginComponent
  ],
  imports: [
    CommonModule,
    JqueryPluginRoutingModule
  ]
})
export class JqueryPluginModule { }
