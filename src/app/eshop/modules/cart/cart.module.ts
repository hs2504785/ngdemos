import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartLinkWidgetComponent } from './cart-link-widget/cart-link-widget.component';
import { CartButtonWidgetComponent } from './cart-button-widget/cart-button-widget.component';

@NgModule({
  declarations: [CartComponent, CartLinkWidgetComponent],
  imports: [CommonModule, CartRoutingModule],
  exports: [CartButtonWidgetComponent, CartLinkWidgetComponent],
})
export class CartModule {}
