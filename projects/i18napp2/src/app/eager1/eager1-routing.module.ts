import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eager1Component } from './eager1.component';

const routes: Routes = [{ path: '', component: Eager1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Eager1RoutingModule { }
