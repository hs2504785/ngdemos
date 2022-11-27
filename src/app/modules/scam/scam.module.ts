import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScamRoutingModule } from './scam-routing.module';
import { ScamComponent } from './scam.component';

@NgModule({
  declarations: [ScamComponent],
  imports: [CommonModule, ScamRoutingModule],
})
export class ScamModule {}
