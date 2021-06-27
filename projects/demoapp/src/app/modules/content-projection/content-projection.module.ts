import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection.component';
import { AuthFormModule } from './auth-form/auth-form.module';

@NgModule({
  declarations: [ContentProjectionComponent],
  imports: [CommonModule, ContentProjectionRoutingModule, AuthFormModule],
})
export class ContentProjectionModule {}
