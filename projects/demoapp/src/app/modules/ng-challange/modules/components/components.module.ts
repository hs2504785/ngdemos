import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '../../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ComponentsComponent, LoaderComponent],
  imports: [CommonModule, SharedModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
