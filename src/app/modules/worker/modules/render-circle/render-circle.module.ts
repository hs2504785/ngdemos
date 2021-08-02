import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderCircleRoutingModule } from './render-circle-routing.module';
import { RenderCircleComponent } from './render-circle.component';
import { FormsModule } from '@angular/forms';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [RenderCircleComponent, CircleComponent],
  imports: [CommonModule, RenderCircleRoutingModule, FormsModule],
})
export class RenderCircleModule {}
