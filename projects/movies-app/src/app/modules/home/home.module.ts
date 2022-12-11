import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemsBannerModule } from '../items-banner/items-banner.module';
import { SliderComponent } from '../../components/slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemsBannerModule,
  ],
})
export class HomeModule {}
