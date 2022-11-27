import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Zippy1Component } from './zippy1.component';

const routes: Routes = [{ path: '', component: Zippy1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Zippy1RoutingModule { }
