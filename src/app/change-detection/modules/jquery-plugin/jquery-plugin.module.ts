import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JqueryPluginRoutingModule } from './jquery-plugin-routing.module';
import { JqueryPluginComponent } from './jquery-plugin.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerOptimizedComponent } from './color-picker-optimized/color-picker-optimized.component';

@NgModule({
  declarations: [
    JqueryPluginComponent,
    ColorPickerComponent,
    ColorPickerOptimizedComponent,
  ],
  imports: [CommonModule, JqueryPluginRoutingModule],
})
export class JqueryPluginModule {}
