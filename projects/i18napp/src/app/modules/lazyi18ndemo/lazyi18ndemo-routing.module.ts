import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyi18ndemoComponent } from './lazyi18ndemo.component';

const routes: Routes = [{ path: '', component: Lazyi18ndemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyi18ndemoRoutingModule { }
