import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eager2Component } from './eager2.component';

const routes: Routes = [{ path: '', component: Eager2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Eager2RoutingModule { }
