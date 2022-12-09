import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsBannerComponent } from './items-banner.component';

@NgModule({
  declarations: [ItemsBannerComponent],
  imports: [CommonModule],
  exports: [ItemsBannerComponent],
})
export class ItemsBannerModule {}
