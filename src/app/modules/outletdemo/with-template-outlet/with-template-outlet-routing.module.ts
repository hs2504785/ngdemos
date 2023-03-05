import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithTemplateOutletComponent } from './with-template-outlet.component';

const routes: Routes = [{ path: '', component: WithTemplateOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithTemplateOutletRoutingModule { }
