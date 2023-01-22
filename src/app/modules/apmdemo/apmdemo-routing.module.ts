import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApmdemoComponent } from './apmdemo.component';

const routes: Routes = [{ path: '', component: ApmdemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApmdemoRoutingModule { }
