import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsBannerComponent } from './items-banner.component';
import { ItemModule } from '../item/item.module';
@NgModule({
  declarations: [ItemsBannerComponent],
  imports: [CommonModule, ItemModule],
  exports: [ItemsBannerComponent],
})
export class ItemsBannerModule {}
