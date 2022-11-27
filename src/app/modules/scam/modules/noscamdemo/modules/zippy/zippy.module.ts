import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZippyRoutingModule } from './zippy-routing.module';
import { ZippyComponent as LandingZippy } from './zippy.component';
import { UiModule } from '../../../ui/ui.module';
import { NoscamSharedModule } from '../../../shared/noscam-shared.module';
import { ZippyComponent } from '../components/zippy/zippy.component';

@NgModule({
  declarations: [LandingZippy, ZippyComponent],
  imports: [CommonModule, ZippyRoutingModule, UiModule, NoscamSharedModule],
})
export class ZippyModule {}
