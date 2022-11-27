import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ZippyComponent } from './components/zippy/zippy.component';
import { Zippy1Component } from './components/zippy1/zippy1.component';
import { ButtonDirective } from './directives/button.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    ButtonDirective,
    CapitalizePipe,
    ZippyComponent,
    Zippy1Component,
  ],
  imports: [UiModule],
  exports: [ButtonDirective, CapitalizePipe, ZippyComponent, Zippy1Component],
})
export class NoscamSharedModule {}
