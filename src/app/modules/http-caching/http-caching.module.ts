import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpCachingRoutingModule } from './http-caching-routing.module';
import { HttpCachingComponent } from './http-caching.component';
import { HttpCachingService } from './services/http-caching.service';

@NgModule({
  declarations: [HttpCachingComponent],
  imports: [CommonModule, HttpCachingRoutingModule],
  providers: [HttpCachingService],
})
export class HttpCachingModule {}
