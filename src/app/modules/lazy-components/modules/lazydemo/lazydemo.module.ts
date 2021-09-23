import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazydemoRoutingModule } from './lazydemo-routing.module';
import { LazydemoComponent } from './lazydemo.component';
import { BusinessCardComponent } from './lazy/business-card/business-card.component';
import { UserListComponent } from './lazy/user-list/user-list.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';
import { DynamicComponentLoadingScamComponent } from './dynamic-component-loading-scam/dynamic-component-loading-scam.component';
import { DynamicSimpleFormComponent } from './dynamic-simple-form/dynamic-simple-form.component';
import { DynamicComplexFormComponent } from './dynamic-complex-form/dynamic-complex-form.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DynamicIoModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    LazydemoComponent,
    BusinessCardComponent,
    UserListComponent,
    DynamicComponentLoadingComponent,
    DynamicComponentLoadingScamComponent,
    DynamicSimpleFormComponent,
    DynamicComplexFormComponent,
    DynamicFormControlComponent,
  ],
  imports: [
    CommonModule,
    LazydemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DynamicIoModule,
  ],
})
export class LazydemoModule {}
