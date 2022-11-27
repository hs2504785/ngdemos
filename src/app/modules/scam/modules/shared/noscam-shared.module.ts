import { NgModule } from '@angular/core';
import { ButtonDirective } from './directives/button.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [ButtonDirective, CapitalizePipe],
  imports: [],
  exports: [ButtonDirective, CapitalizePipe],
})
export class NoscamSharedModule {}
