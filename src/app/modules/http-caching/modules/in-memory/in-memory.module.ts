import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryRoutingModule } from './in-memory-routing.module';
import { InMemoryComponent } from './in-memory.component';
import { InMemoryService } from './services/in-memory.service';

@NgModule({
  declarations: [InMemoryComponent],
  imports: [CommonModule, InMemoryRoutingModule],
  providers: [InMemoryService],
})
export class InMemoryModule {}
