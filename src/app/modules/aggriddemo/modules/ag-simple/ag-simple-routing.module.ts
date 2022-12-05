import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgSimpleComponent } from './ag-simple.component';

const routes: Routes = [{ path: '', component: AgSimpleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgSimpleRoutingModule { }
