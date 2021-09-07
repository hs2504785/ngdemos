import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReuseCompLogicComponent } from './reuse-comp-logic.component';

const routes: Routes = [{ path: '', component: ReuseCompLogicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReuseCompLogicRoutingModule { }
