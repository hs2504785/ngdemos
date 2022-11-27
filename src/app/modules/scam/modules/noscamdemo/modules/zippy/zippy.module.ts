import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZippyRoutingModule } from './zippy-routing.module';
import { ZippyComponent } from './zippy.component';
import { UiModule } from '../../ui/ui.module';
import { CapitalizePipe } from '../../../shared/pipes/capitalize.pipe';
import { ButtonDirective } from '../../../shared/directives/button.directive';

@NgModule({
  declarations: [ZippyComponent, CapitalizePipe, ButtonDirective],
  imports: [CommonModule, ZippyRoutingModule, UiModule],
})
export class ZippyModule {}
