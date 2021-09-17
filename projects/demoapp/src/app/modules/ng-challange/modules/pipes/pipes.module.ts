import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PipesComponent, TruncatePipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
  exports: [TruncatePipe],
})
export class PipesModule {}
