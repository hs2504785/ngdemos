import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { TimersComponent } from './timers.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasOptimizedComponent } from './canvas-optimized/canvas-optimized.component';

@NgModule({
  declarations: [TimersComponent, CanvasComponent, CanvasOptimizedComponent],
  imports: [CommonModule, TimersRoutingModule],
})
export class TimersModule {}
