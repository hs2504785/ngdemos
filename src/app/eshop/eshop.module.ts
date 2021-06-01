import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { EshopComponent } from './eshop.component';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerSupportComponent } from './components/customer-support/customer-support.component';

@NgModule({
  declarations: [EshopComponent, HeaderComponent, CustomerSupportComponent],
  imports: [CommonModule, EshopRoutingModule],
})
export class EshopModule {}
