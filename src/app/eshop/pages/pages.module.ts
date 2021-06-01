import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { StoreModule } from '@ngrx/store';
import {
  customerSupportFeatureKey,
  customerSupportReducer,
} from './state/customer-support.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerSupportEffects } from './state/customer-support.effects';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent, CustomerSupportComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    StoreModule.forFeature(customerSupportFeatureKey, customerSupportReducer),
    EffectsModule.forFeature([CustomerSupportEffects]),
    // SharedModule,
    // RouterModule,
  ],
})
export class PagesModule {}
