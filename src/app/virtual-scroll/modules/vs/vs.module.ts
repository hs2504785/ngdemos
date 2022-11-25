import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsRoutingModule } from './vs-routing.module';
import { VsComponent } from './vs.component';
import { VsdumbComponent } from './components/vsdumb/vsdumb.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [VsComponent, VsdumbComponent],
  imports: [CommonModule, ScrollingModule, VsRoutingModule],
})
export class VsModule {}
