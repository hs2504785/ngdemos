import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComplexFormComponent } from './dynamic-complex-form/dynamic-complex-form.component';
import { DynamicComponentLoadingScamComponent } from './dynamic-component-loading-scam/dynamic-component-loading-scam.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';
import { DynamicSimpleFormComponent } from './dynamic-simple-form/dynamic-simple-form.component';
import { LazydemoComponent } from './lazydemo.component';

const routes: Routes = [
  { path: 'home', component: LazydemoComponent },
  {
    path: 'dynamic-component-loading',
    component: DynamicComponentLoadingComponent,
  },
  {
    path: 'dynamic-component-loading-scam',
    component: DynamicComponentLoadingScamComponent,
  },
  { path: 'dynamic-complex-form', component: DynamicComplexFormComponent },
  { path: 'dynamic-simple-form', component: DynamicSimpleFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazydemoRoutingModule {}
