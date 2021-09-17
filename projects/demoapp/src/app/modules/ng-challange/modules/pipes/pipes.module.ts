import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { SharedModule } from '../../shared/shared.module';
import { FlattenPipe } from './flatten/flatten.pipe';

@NgModule({
  declarations: [PipesComponent, TruncatePipe, FlattenPipe],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
})
export class PipesModule {}
