import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChallangeComponent } from './ng-challange.component';

const routes: Routes = [{ path: '', component: NgChallangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgChallangeRoutingModule { }
