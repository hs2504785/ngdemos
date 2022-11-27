import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZippyRoutingModule } from './zippy-routing.module';
import { ZippyComponent } from './zippy.component';
import { UiModule } from '../../../shared/ui/ui.module';
import { NoscamSharedModule } from '../../../shared/noscam-shared.module';

@NgModule({
  declarations: [ZippyComponent],
  imports: [CommonModule, ZippyRoutingModule, UiModule, NoscamSharedModule],
})
export class ZippyModule {}
