import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy3RoutingModule } from './lazy3-routing.module';
import { Lazy3Component } from './lazy3.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Lazy3Component],
  imports: [CommonModule, Lazy3RoutingModule, TranslateModule.forChild()],
})
export class Lazy3Module {}
