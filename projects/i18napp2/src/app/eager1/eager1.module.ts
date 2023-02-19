import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eager1RoutingModule } from './eager1-routing.module';
import { Eager1Component } from './eager1.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Eager1Component],
  imports: [CommonModule, Eager1RoutingModule, TranslateModule.forChild()],
})
export class Eager1Module {}
