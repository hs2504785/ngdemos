import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutTemplateOutletComponent } from './without-template-outlet.component';

const routes: Routes = [{ path: '', component: WithoutTemplateOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutTemplateOutletRoutingModule { }
