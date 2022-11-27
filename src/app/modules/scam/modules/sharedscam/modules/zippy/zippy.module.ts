import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZippyComponent } from './zippy/zippy.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ZippyComponent],
  imports: [CommonModule, ButtonModule],
  exports: [ZippyComponent],
})
export class ZippyModule {}
