import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZippyRoutingModule } from './zippy-routing.module';
import { ZippyComponent } from './zippy.component';
import { ZippyModule as ZippyModule1 } from '../../../sharedscam/modules/zippy/zippy.module';
import { CapitalizeModule } from '../../../sharedscam/modules/capitalize/capitalize.module';
import { C1Module } from '../../../sharedscam/modules/ui/c1/c1.module';

@NgModule({
  declarations: [ZippyComponent],
  imports: [
    CommonModule,
    ZippyRoutingModule,
    ZippyModule1,
    CapitalizeModule,
    C1Module,
  ],
})
export class ZippyModule {}
