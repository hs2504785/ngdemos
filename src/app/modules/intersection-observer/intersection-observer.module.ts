import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionObserverRoutingModule } from './intersection-observer-routing.module';
import { IntersectionObserverComponent } from './intersection-observer.component';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IntersectionObserverDirectiveModule } from 'src/app/shared/directives/intersection-observer/intersection-observer-directive.module';

@NgModule({
  declarations: [IntersectionObserverComponent, SampleComponent, DemoComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    IntersectionObserverRoutingModule,
    IntersectionObserverDirectiveModule,
  ],
})
export class IntersectionObserverModule {}
