import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionObserverRoutingModule } from './intersection-observer-routing.module';
import { IntersectionObserverComponent } from './intersection-observer.component';
import { IntersectionObserverDirective } from '../shared/directives/intersection-observer.directive';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { IntrDataService } from './services/intr-data.service';


@NgModule({
  declarations: [
    IntersectionObserverComponent,
    IntersectionObserverDirective,
    SampleComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    IntersectionObserverRoutingModule
  ],
  providers: [
    IntrDataService
  ]
})
export class IntersectionObserverModule { }
