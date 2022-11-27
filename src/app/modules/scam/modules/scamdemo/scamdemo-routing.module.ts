import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScamdemoComponent } from './scamdemo.component';

const routes: Routes = [{ path: '', component: ScamdemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScamdemoRoutingModule { }
