import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoscamdemoRoutingModule } from './noscamdemo-routing.module';
import { NoscamdemoComponent } from './noscamdemo.component';

@NgModule({
  declarations: [NoscamdemoComponent],
  imports: [CommonModule, NoscamdemoRoutingModule],
})
export class NoscamdemoModule {}
